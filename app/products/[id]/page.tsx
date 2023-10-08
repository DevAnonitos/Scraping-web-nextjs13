import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { 
    Modal, 
    PriceInfoCard, 
    ProductCard 
} from '@/components';

import { Product } from '@/types';
import { formatNumber } from '@/lib/utils';

type Props = {
    params: { id: string, },
};

const ProductDetails = async ({ params: { id } }: Props) => {
    return (
        <div className='product-container'>
            <div className='flex gap-28 xl:flex-row flex-col'>
                
            </div>
        </div>
    );
};

export default ProductDetails;