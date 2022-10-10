import React from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/noun-cart.svg'

import Image from 'next/image'
import Link from 'next/link'
import { useAppSelector } from '../../src/reduxSetup/config'


const HeaderComponent: React.FC<any> = () => {
    const { title } = useAppSelector(state => state.header)
    return (
        <>
            <header className='h-28 w-full bg-white sticky top-0 z-50 font-opensans'>
                <nav className='flex justify-between items-center h-full flex w-11/12 mx-auto'>
                    <Image layout='fixed' height={35} width={200} style={{paddingLeft: "40px"}} src={logo} alt="bloowatch-logo" />
                    <ul className='flex w-4/12 justify-between font-semibold'>
                        <Link href="/products" >
                            <li className='cursor-pointer'>SHOP</li>
                        </Link>
                        <li className='cursor-pointer'>BLOG</li>
                        <li className='cursor-pointer'>SEARCH</li>
                        <Link href="/cart" >
                            <li className='cursor-pointer'>
                                <Image src={cart} alt="cart-icon" />
                                <span className='ml-1'>CART</span>
                            </li>
                        </Link>

                    </ul>
                </nav>
            </header>
            <div className='h-52 flex items-center bg-primary font-opensans'>
                <div className='w-9/12 mx-auto text-white'>
                    <h1 className='capitalize text-4xl'> {title} </h1>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent;
