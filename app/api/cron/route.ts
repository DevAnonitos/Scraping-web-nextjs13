import { NextResponse } from "next/server";

import { connectToDB } from "@/lib/mongoose"; 
import Product from "@/lib/models/product.model"; 
import { scrapeAmazonProduct } from "@/lib/scraper";
import { 
    getLowestPrice, 
    getHighestPrice, 
    getAveragePrice, 
    getEmailNotificationType,
} from '../../../lib/utils';

import { generateEmailBody, sendEmail, } from "@/lib/nodemailer";

export const maxDuration = 10;
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request) {
    try {
        connectToDB();

        const products = await Product.find({});
        
        if(!products) {
            throw new Error("No product fetched");
        }

        const updatedProducts = await Promise.all(
            products.map(async(currentProduct) => {
                const scrapedProduct = await scrapeAmazonProduct(currentProduct.url);

                if(!scrapedProduct) return;

                const updatePriceHistory = [
                    ...currentProduct.priceHistory,
                    {
                        price: scrapedProduct.currentPrice,
                    },
                ];

                const product = {
                    ...scrapedProduct,
                    priceHistory: updatePriceHistory,
                    lowestPrice: getLowestPrice(updatePriceHistory),
                    highestPrice: getHighestPrice(updatePriceHistory),
                    averagePrice: getAveragePrice(updatePriceHistory),
                };

                const updatedProduct = await Product.findOneAndUpdate(
                    {
                        url: product.url,
                    },
                    product,
                );

                const emailNotificationType = getEmailNotificationType(
                    scrapedProduct,
                    currentProduct,
                );

                if(emailNotificationType && updatedProduct.users.length > 0){
                    const productInfo = {
                        title: updatedProduct.title,
                        url: updatedProduct.url,
                    };

                    const emailContent = await generateEmailBody(
                        productInfo, emailNotificationType
                    );
                    // Get array of user emails
                    const userEmails = updatedProduct.users.map((user: any) => user.email);
                    // Send email notification
                    await sendEmail(emailContent, userEmails);
                }
            })
        );

        return NextResponse.json({
            message: "Ok",
            data: updatedProducts,
        });
    } catch (error: any) {
        throw new Error(`Fail to get all product ${error.message}`);
    }
};