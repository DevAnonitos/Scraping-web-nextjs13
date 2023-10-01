"use server";

import { User } from "@/types";
import { revalidatePath } from "next/cache";

export async function scrapeAndStoreProduct(productUrl: string) {
    try {
        
    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`);
    }
};