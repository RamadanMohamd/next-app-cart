import type { NextPage } from 'next'
import { useState } from 'react'
import CartItemComponent, { Product as cartItem } from '../src/components/cart-components/cart-item-component'
import MainLayout from '../src/layouts/main'
import pr1Image from "../src/assets/footer-imgs/Bitmap-1.png"
import pr2Image from "../src/assets/footer-imgs/Bitmap-2.png"

import Button from '../src/components/shared/button-component'
import CartSubtotalComponent from '../src/components/cart-components/cart-subtotal.component'

import { useAppDispatch } from '../src/reduxSetup/config'
import { changeHeaderTitle } from '../src/reduxSetup/headerSlice'

const Cart: NextPage = () => {
  
  const dispatch = useAppDispatch()
  dispatch(changeHeaderTitle({ title: "CART" }))

  const [cart, setCart] = useState<cartItem[] | any>([
    {
      id: 123,
      name: "KAYAK WITH PADDLES",
      categories: ["home product"],
      tags: ["kiyaki"],
      images: [pr1Image],
      inSale: true,
      price: 132,
      disscount: 0,
      sku: "blabla",
      quantity: 1,
      subTotal() {
        return this.price * this.quantity
      }
    },
    {
      id: 223,
      name: "Shampoo",
      categories: ["home product"],
      tags: ["kiyaki"],
      images: [pr2Image],
      inSale: true,
      price: 156,
      disscount: 0,
      sku: "blabla",
      quantity: 1,
      subTotal() {
        return this.price * this.quantity
      }
    }
  ])

  const changeQuantity = (id: (string | number), type: ("add" | "sub")) => {
    let product = cart.find((item: cartItem) => item?.id === id)
    if (type === "add") {
      setCart(cart.map((item: cartItem, index: number) => {
        if (item?.id === id) return { ...item, quantity: item?.quantity + 1 }
        return item
      }))
    }
    else if (type === "sub") {
      if (product?.quantity === 1) return
      setCart(cart.map((item: cartItem, index: number) => {
        if (item?.id === id) return { ...item, quantity: item?.quantity - 1 }
        return item
      }))
    }
  }

  const removeItem = (id: (string | number)) => {
    setCart((c: Array<cartItem>) => c.filter((product: cartItem) => product.id !== id))
  }

  const total = (): number => {
    if (!cart.length) {
      return 0
    }
    let t = cart.map((item: cartItem) => item?.subTotal())
    let sum = t?.reduce((sum: number, currentValue: number) => sum + currentValue)
    return sum
  }

  const CartItem: (React.ReactNode | any) = cart?.map((item: cartItem, index: number) => <CartItemComponent key={index}
    product={item}
    changeQuantity={changeQuantity}
    removeItem={removeItem}
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
            <Button  >
              Apply coupon
            </Button>
            <Button  >
              Update cart
            </Button>
          </div>
        </div>

        <div className='mt-20'>
          <h3 className="uppercase font-bold text-2xl font-opensans tracking-widest" style={{ letterSpacing: 15 }}>
            Cart Total
          </h3>
          <CartSubtotalComponent subTotal={total()} />
        </div>
      </div>

    </MainLayout>
  )
}

export default Cart
