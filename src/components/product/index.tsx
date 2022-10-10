
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import image1 from '../../assets/products/1.png'
import image2 from '../../assets/products/2.png'
import image3 from '../../assets/products/3.png'
import Button from '../../components/shared/button-component'
import { Product } from '../../../types/product'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../reduxSetup/config'
import { addItem, removeItem } from '../../reduxSetup/storeSlice'

const ProductComponent: React.FC<Product> = (props: Product) => {
    const { price, inSale, tags, name, images, sku } = props

    const { store } = useAppSelector(state => state)

    const [onStore, setOnStore] = useState(store?.items?.find(item => item.product.sku === sku)? true : false)

    const router = useRouter()
    const dispatch = useAppDispatch()
    const image = images[0]?.includes('1') ? image1 : images[0]?.includes('2') ? image2 : image3;

    const handleItemToCart = (event: any,product: Product) => {
        event.stopPropagation()
        event.preventDefault()
        if (onStore) {
            dispatch(removeItem({product: product}))
        } else {
            dispatch(addItem({product: product, count: 1, operation: "increment"}))
        }
    }

    useEffect(() => {
        setOnStore(store?.items?.find(item => item.product.sku === sku) ? true : false)
    }, [store])

    const handleRoute = (id: number) => {
        router.push('/products/' + id)
    }

    return (
        <div onClick={() => handleRoute(sku)} className='col-span-3 h-[380px] w-full flex flex-col justify-between items-center group cursor-pointer'>
            <div className='h-64 relative flex items-center justify-center w-full bg-productBG'>
                {inSale && <div className='absolute left-4 -top-6 rounded-full text-white capitalize bg-primary w-14 h-14 flex items-center justify-center'>
                    SALE
                </div>}
                <div className='h-[220px] w-[110px] mb-28'>
                    <Image src={image} alt="product-image" />
                </div>

                <div className='group-hover:block hidden w-full absolute bottom-0 left-0 right-0 z-index: 100'>
                    <Button className='w-full' onClick={(e: any) => handleItemToCart(e, {...props})}>{onStore ? "REMOVE FROM CART" : "ADD TO CART"}</Button>
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
