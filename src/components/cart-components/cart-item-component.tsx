import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Product } from '../../../types/product'
import { StoreItemsInterFace } from '../../../types/reduxStore'
import closeIcon from "../../assets/close.svg"
import right from "../../assets/right.svg"
import image1 from '../../assets/products/1.png'
import image2 from '../../assets/products/2.png'
import image3 from '../../assets/products/3.png'

const CartItemComponent: React.FC<any> = (props) => {
  const product: StoreItemsInterFace = props?.product
  const changeQuantity = props?.changeQuantity
  const removeItem = props?.removeItem

  const image = product.product.images[0]?.includes('1') ? image1 : product.product.images[0]?.includes('2') ? image2 : image3;

  return (
    <div className="flex flex-col w-full items-center">
      <div className="font-opensans grid grid-cols-12 h-28 w-full">
        <div className="col-span-1 flex h-full items-center cursor-pointer" onClick={() => removeItem(product.product)}>
          <Image src={closeIcon} alt='' />
        </div>
        <div className="col-span-4 flex h-full items-center gap-3 uppercase font-bold">
          <span className='w-24 h-32 flex justify-center items-center'>
            <Image height={70} width={40} src={image} alt='image' />
          </span>
          {product.product.name}
        </div>
        <div className="col-span-2 flex h-ful items-center font-semibold">${Number(product.product.price).toFixed(2)}</div>
        <div className="col-span-2 flex gap-6 h-full items-center font-semibold">
          <span>
            {product.count}
          </span>
          <div className="flex flex-col justify-center items-center">
            <span className="cursor-pointer -rotate-90 justify-center items-center flex" onClick={() => changeQuantity(product, "increment")}>
              <Image src={right} alt='' />
            </span>
            <p className='bg-black my-1' style={{ height: 3, width: 24 }}></p>
            <span className="cursor-pointer rotate-90 justify-center items-center flex" onClick={() => changeQuantity(product, "decrement")}>
              <Image src={right} alt='' />
            </span>

          </div>

        </div>
        <div className="col-span-2 flex h-full items-center font-semibold">${Number(product.product.price * product.count).toFixed(2)}</div>
      </div>

      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full" />
    </div>
  )
}

export default CartItemComponent