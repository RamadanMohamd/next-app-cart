
import React from 'react'
import Image from "next/image"
import arrow from "assets/left.svg"

const ProductsFilter: React.FC<any> = () => {
    return (
        <div className='w-full flex justify-between col-span-9 text-sortText text-sm font-medium mb-16'>
            <span>
            Showing 1–9 of 21 results
            </span>
            <p className='flex cursor-pointer '>
            <span className='mr-16'>
              Default sorting 
            </span>
            <span className='-rotate-90 justify-center items-center flex '>
              <Image height={14} src={arrow} alt="down arrow" />
            </span>
            </p>
          
 
        </div>
    )
}

export default ProductsFilter;
