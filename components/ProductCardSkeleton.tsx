const ProductCardSkeleton = () => {
    return (
        <>
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                    className='rounded-lg overflow-hidden bg-gray-300 animate-pulse'
                >
                    <div className='bg-gray-400 h-48 w-full' />
                    <div className='bg-gray-400 h-4 mt-4 w-2/3' />
                    <div className='bg-gray-400 h-4 mt-2 w-1/2' />
                    <div className='bg-gray-400 h-4 mt-2 w-3/4' />
                    <div className='bg-gray-400 h-4 mt-2 w-1/3' />
                </div>
            ))}
        </>
    );
};

export default ProductCardSkeleton;