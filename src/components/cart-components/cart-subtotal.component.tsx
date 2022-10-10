import React from 'react'
import Button from '../shared/button-component'
type props = {
  subTotal: number
  tax?: number
}
function CartSubtotalComponent({ subTotal, tax = 0.15 }: props) {
  const totall = () => subTotal + (subTotal * tax)
  return (

    <div className="flex flex-col w-1/2 items-start  my-7">
      <div className="font-opensans grid grid-cols-6 h-12 w-full">
        <div className="col-span-3 flex h-full items-center uppercase font-semibold text-xs">SubTotal</div>
        <div className="col-span-3 flex h-full items-center ">{subTotal}</div>
      </div>

      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full" />
      <div className="font-opensans grid grid-cols-6 h-12 w-full">
        <div className="col-span-3 flex h-full items-center uppercase font-semibold text-xs">Shipping</div>
        <div className="col-span-3 flex h-full items-center ">Enter your adress</div>
      </div>

      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full" />
      <div className="font-opensans grid grid-cols-6 h-12 w-full">
        <div className="col-span-3 flex h-full items-center uppercase font-semibold text-xs">Total</div>
        <div className="col-span-3 flex h-full items-center ">{totall()}</div>
      </div>

      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full" />
      <Button className='my-8 px-12'>proceed to checkout</Button>
    </div>
  )
}

export default CartSubtotalComponent