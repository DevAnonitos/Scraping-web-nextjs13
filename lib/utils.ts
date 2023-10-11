import { PriceHistoryItem, Product } from "@/types";

const Notification = {
    WELCOME: 'WELCOME',
    CHANGE_OF_STOCK: 'CHANGE_OF_STOCK',
    LOWEST_PRICE: 'LOWEST_PRICE',
    THRESHOLD_MET: 'THRESHOLD_MET',
};

const THRESHOLD_PERCENTAGE = 40;

export const extractPrice = (...elements: any) => {
    for(const element of elements) {
        const priceText = element.text().trim();

        if(priceText){
            const cleanPrice = priceText.replace(/[^\d.]/g, '');

            let firstPrice;

            if(cleanPrice){
                firstPrice = cleanPrice.match(/\d+\.\d{2}/)?.[0];
            }

            return firstPrice || cleanPrice;
        }
    }

    return '';
};

export const extractCurrency = (element: any) => {
    const currencyText = element.text().trim().slice(0,1);

    return currencyText ? currencyText : "";
};

export const extractDescription = ($: any) => {
    const selectors = [
        ".a-unordered-list .a-list-item",
        ".a-expander-content p",
    ];

    for(const selector  of selectors){
        const elements = $(selector);

        if(elements.length > 0){
            const textContent = elements
                .map((_: any, element: any) => $(element).text().trim())
                .get()
                .join("\n");
            return textContent;
        }
    }

    return "";
};

export const getHighestPrice = (priceList: PriceHistoryItem[]) => {

};

export const getEmailNotificationType = () => {

};

export const formatNumber = (num: Number = 0) => {
    return num.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
};