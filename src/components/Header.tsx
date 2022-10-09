import React from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/noun-cart.svg'

import Image from 'next/image'
import Link from 'next/link'

const HeaderComponent: React.FC<any> = () => {
    return (
        <div className='font-opensans'>
            <header className='h-24 flex flex-col w-10/12 mx-auto '>
                <nav className='flex justify-between items-center h-full'>
                    <Image layout='fixed' height={31} width={180} src={logo} alt="bloowatch-logo" />
                    <ul className='flex w-4/12 justify-between'>
                        <li className='cursor-pointer'>SHOP</li>
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
            <div className='h-40 flex items-center bg-primary'>
                <div className='w-9/12 mx-auto text-white'>
                    <h1> Page name </h1>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;
