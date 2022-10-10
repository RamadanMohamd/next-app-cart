import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import CartItemComponent from '../src/components/cart-components/cart-item-component'
import MainLayout from '../src/layouts/main'
import Button from '../src/components/shared/button-component'
import CartSubtotalComponent from '../src/components/cart-components/cart-subtotal.component'

import { useAppDispatch, useAppSelector } from '../src/reduxSetup/config'
import { changeHeaderTitle } from '../src/reduxSetup/headerSlice'
import { Product } from '../types/product'
import { changeItemCount, removeItem } from '../src/reduxSetup/storeSlice'
import { StoreItemsInterFace } from '../types/reduxStore'

const Cart: NextPage = () => {

  const { items, count, total } = useAppSelector(state => state.store)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(changeHeaderTitle({ title: "CART" }))
  }, [])
  const handlechangeQuantity = (item: StoreItemsInterFace,  type: ("incerement" | "decrement")) => {
    const itemObject = {product: item.product, count: 1, operation: type}
    if (item?.count === 1 && type === 'decrement') {
      handleRemoveItem(item.product)
    } else {
      dispatch(changeItemCount(itemObject))
    }
  }

  const handleRemoveItem = (product: Product) => {
    dispatch(removeItem({product: product}))
  }

  const CartItem: (React.ReactNode | any) = items?.map((item: StoreItemsInterFace, index: number) => <CartItemComponent key={index}
    product={item}
    changeQuantity={handlechangeQuantity}
    removeItem={handleRemoveItem}
  />)

  return (
    <MainLayout>
      <div className='py-24'>
        <div className="flex flex-col w-full items-center">
          <div className="font-opensans grid grid-cols-12 h-16 w-full">
            <div className="col-span-1 flex h-full items-center "></div>
            <div className="col-span-4 flex h-full items-center font-bold ">PRODUCT</div>
            <div className="col-span-2 flex h-full items-center font-bold">PRICE</div>
            <div className="col-span-2 flex h-full items-center font-bold">QUANTITY</div>
            <div className="col-span-2 flex h-full items-center font-bold">SUBTOTAL</div>
          </div>

          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full" />
          {
            CartItem
          }
        </div>


        <div className='grid grid-cols-12 w-ful'>
          <div className='col-span-1 '>
          </div>
          <div className="col-span-10  self-start flex  gap-10 my-10">
            <Button className='px-12' >
              Apply coupon
            </Button>
            <Button className='px-12' >
              Update cart
            </Button>
          </div>
        </div>

        <div className='mt-20'>
          <h3 className="uppercase font-bold text-2xl font-opensans tracking-widest" style={{ letterSpacing: 15 }}>
            Cart Total
          </h3>
          <CartSubtotalComponent subTotal={total} />
        </div>
      </div>

    </MainLayout>
  )
}

export default Cart
