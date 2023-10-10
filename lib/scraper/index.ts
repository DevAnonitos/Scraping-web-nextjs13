"use server";

import axios from "axios";
import * as cheerio from "cheerio";
import { 
    extractPrice, 
    extractCurrency, 
    extractDescription 
} from "../utils";

export async function scrapeAmazonProduct(url: string) {

    if(!url) {
        return;
    }

    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);

    const port = 22225;

    const session_id = (100000 * Math.random() | 0);

    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    };

    try {
        const response = await axios.get(url, options);

        console.log(response.data);

        const $ = cheerio.load(response.data);

        const title = $("#productTitle").text().trim();

        console.log({ title });
        const currentPrice = extractPrice(
            $('.priceToPay span.a-price-whole'),
            $('.a.size.base.a-color-price'),
            $('.a-button-selected .a-color-base'),
        );
        console.log(currentPrice);

    } catch (error: any) {
        console.log(error);
    }
};