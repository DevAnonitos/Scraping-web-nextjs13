"use server";

import nodemailer from 'nodemailer';
import { 
    EmailContent,
    EmailProductInfo, 
    NotificationType 
} from '@/types';

const Notification = {
    WELCOME: 'WELCOME',
    CHANGE_OF_STOCK: 'CHANGE_OF_STOCK',
    LOWEST_PRICE: 'LOWEST_PRICE',
    THRESHOLD_MET: 'THRESHOLD_MET',
};

export async function generateEmailBody(
    product: EmailProductInfo, 
    type: NotificationType,
) {
    const THRESHOLD_PERCENTAGE = 40;

    const shortedTitle = product.title.length > 20
        ? `${product.title.substring(0, 20)}...`
        : product.title;
    
    let subject = "";
    let body = "";
};

const transporter = nodemailer.createTransport({
    pool: true,
    service: 'hotmail',
    port: 2525,
    auth: {
        user: 'javascriptmastery@outlook.com',
        pass: process.env.EMAIL_PASSWORD,
    },
    maxConnections: 1,
});

export const sendEmail = async (emailContent: EmailContent, sendTo: string[]) => {
    const mailOptions = {
        from: '',
        to: sendTo,
        html: emailContent.body,
        subject: emailContent.subject,
    };

    
};