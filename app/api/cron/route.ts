import { NextResponse } from "next/server";

import { connectToDB } from "@/lib/mongoose"; 
import Product from "@/lib/models/product.model"; 

export const maxDuration = 300;
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request) {
    try {
        connectToDB();

        const products = await Product.find({});
        
        if(!products) {
            throw new Error("No product fetched");
        }

        return NextResponse.json({
            message: "Ok",
        })
    } catch (error: any) {
        throw new Error(`Fail to get all product ${error.message}`);
    }
};