import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        
    } catch (error: any) {
        throw new Error(`Fail to get all product ${error.message}`);
    }
};