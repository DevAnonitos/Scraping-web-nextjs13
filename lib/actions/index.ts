"use server";

import { User } from "@/types";
import { connectToDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scraper";
import { revalidatePath } from "next/cache";
import Product from "../models/product.model";
import { generateEmailBody, sendEmail } from "../nodemailer";

export async function scrapeAndStoreProduct(productUrl: string) {

    if(!productUrl) {
        return;
    }

    try {
        connectToDB();
    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`);
    }
};