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
                <div className='product-image'>
                    {/* Image-product */}
                </div>

                <div className='flex-1 flex flex-col'>
                    <div className='flex justify-between items-start gap-5 flex-wrap pb-6'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-[28px] text-secondary font-semibold'>
                                {/* product-title */}
                            </p>

                            <Link
                                href="/"
                                target='_blank'
                                className='text-base text-black opacity-50'
                            >
                                Visit Product
                            </Link>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='product-hearts'>
                                <Image 
                                    src="/assets/icons/red-heart.svg"
                                    alt='heart'
                                    width={20}
                                    height={20}
                                />

                                <p className='text-base font-semibold text-[#D46F77]'>
                                    {/* product reviewCount */}
                                </p>
                            </div>

                            <div className='p-2 bg-white-200 rounded-10'>
                                <Image
                                    src="/assets/icons/bookmark.svg"
                                    alt='bookmark'
                                    width={20}
                                    height={20}
                                />
                            </div>

                            <div className='p-2 bg-white-200 rounded-10'>
                                <Image
                                    src="/assets/icons/share.svg"
                                    alt='share'
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='product-info'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[34px] text-secondary font-bold'>
                                {/*  */}
                            </p>

                            <p className='text-[21px] text-black opacity-50 line-through'>
                                {/*  */}
                            </p>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-3'>
                                <div className='product-stars'>
                                    <Image
                                        src="/assets/icons/star.svg"
                                        alt='start'
                                        width={16}
                                        height={16}
                                    />

                                    <p className='text-sm text-secondary font-semibold'>
                                        {/*  */}
                                    </p>
                                </div>

                                <div className='product-reviews'>
                                    <Image
                                        src="/assets/icons/comment.svg"
                                        alt='Comment'
                                        width={16}
                                        height={16}
                                    />

                                    <p className='text-sm text-secondary font-semibold'>
                                        {/* Reviews */}
                                    </p>
                                </div>
                            </div>

                            <p className='text-sm text-black opacity-50'>
                                <span className="text-primary-green font-semibold">
                                    93% 
                                </span> of
                                buyers have recommended this.
                            </p>
                        </div>
                    </div>

                    <div className='my-7 flex flex-col gap-5'>
                        <div className='flex gap-5 flex-wrap'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;