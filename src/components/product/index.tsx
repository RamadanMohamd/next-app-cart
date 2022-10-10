
import React from 'react'
import Image from 'next/image'
import image1 from '../../assets/products/1.png'
import image2 from '../../assets/products/2.png'
import image3 from '../../assets/products/3.png'
import Button from '../../components/shared/button-component'
import { Product } from '../../../types/product'
const ProductComponent: React.FC<Product> = ({ price, inSale, tags, name, images }: Product) => {
    const image = images[0]?.includes('1') ? image1 : images[0]?.includes('2') ? image2 : image3
    return (
        <div className='col-span-3 h-[380px] w-full flex flex-col justify-between items-center group'>
            <div className='h-64 relative flex items-center justify-center w-full bg-productBG'>
                {inSale && <div className='absolute left-4 -top-6 rounded-full text-white capitalize bg-primary w-14 h-14 flex items-center justify-center'>
                    SALE
                </div>}
                <div className='h-[220px] w-[110px] mb-28'>
                    <Image src={image} alt="product-image" />
                </div>

                <div className='group-hover:block hidden w-full absolute bottom-0 left-0 right-0'>
                    <Button className='w-full' hasSpace> ADD TO CART</Button>
                </div>
            </div>
            <div className='p-2 flex flex-col items-center'>
                <p className='mt-2 font-semibold'>
                    {name}
                </p>
                <p className='mb-4 text-xs text-primary'>
                    {tags.join(', ')}
                </p>
                <Button className='h-8 px-6 '>
                    <span>
                        ${price}
                    </span>
                </Button>
            </div>
        </div>
    )
}

export default ProductComponent;
