import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from 'reduxSetup/config'
import { Product } from '../../../types/product'
import closeIcon from "../../assets/close.svg"
import right from "../../assets/right.svg"

type changeQuantityFC = (product: (string | number), type: ("add" | "sub")) => void


const IncrementDecrementCount: React.FC<any> = (props) => {
  const product: Product = props?.product

  const { items } = useAppSelector(state => state.cart)

  const [selectedProduct, setSelectedProduct] = useState(undefined)
  const [count,SetCount] = useState(1)

  useEffect(() => {
    if (!selectedProduct ) {
      setSelectedProduct(items.find(item => item.product.sku === product.sku))
    }
  },[items])

  return (
    <div className="col-span-2 flex gap-6 h-full items-center font-semibold">
      <span>
        {selectedProduct ? selectedProduct.count : }
      </span>
      <div className="flex flex-col justify-center items-center">
        <span className="cursor-pointer -rotate-90 justify-center items-center flex" 
        onClick={() => changeQuantity(product?.id, "add")}>
          <Image src={right} alt='' />
        </span>
        <p className='bg-black my-1' style={{ height: 3, width: 24 }}></p>
        <span className="cursor-pointer rotate-90 justify-center items-center flex" 
        onClick={() => changeQuantity(product?.id, "sub")}>
          <Image src={right} alt='' />
        </span>
      </div>

    </div>
  )
}

export default IncrementDecrementCount