import { NextResponse } from "next/server";

import { connectToDB } from "@/lib/mongoose"; 
import Product from "@/lib/models/product.model"; 



export async function GET(request: Request) {
    try {
        connectToDB();

        
    } catch (error: any) {
        throw new Error(`Fail to get all product ${error.message}`);
    }
};