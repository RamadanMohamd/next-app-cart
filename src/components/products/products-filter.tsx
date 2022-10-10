
import React from 'react'
import add from 'assets/products/add.png'
import image1 from 'assets/products/1.png'
import image2 from 'assets/products/4.png'
import image3 from 'assets/products/3.png'
import Image from 'next/image'


const ProductsFilter: React.FC<any> = () => {
   let categoryItem = "text-sortText capitalize mb-2 text-base font-medium"
    return (
        <div className='col-span-3'>
            <h2 className='uppercase mb-3 font-semibold text-lg'>
                Search
            </h2>
            <input placeholder='Search for a product' className='bg-productBG p-4 w-full placeholder:text-sortText placeholder:text-sm mb-12' />
            <h2 className='uppercase font-semibold text-lg mb-5'>
                Categories
            </h2>
            <ul className='mb-20'>
                <li className={categoryItem}>
                    Boards
                </li>
                <li className={categoryItem}>
                    Canoenig
                </li>
                <li className={categoryItem}>
                    Equipment
                </li>
                <li className={categoryItem}>
                    Paddling
                </li>
                <li className={categoryItem}>
                    Rental
                </li>
                <li className={categoryItem}>
                    Scubadiving
                </li>
                <li className={categoryItem}>
                    Surfing
                </li>

            </ul>


            <h2 className='uppercase font-semibold text-lg mb-14'>
                Related Products
            </h2>

            <div className='flex mb-3'>
                <div className='bg-productBG py-3 px-5 mr-3'>
                <Image height={90} width={40} src={image1} alt="1" />
                </div>
                <div className='flex flex-col mt-7'>
                    <h4 className='uppercase text-sm font-medium mb-3'> Title </h4>
                    <div className='flex'>

                    </div>
                </div>
            </div>
            <div  className='flex mb-3'>
            <div className='bg-productBG py-3 px-5 mr-3'>
                <Image height={90} width={40} src={image2} alt="2" />
                </div>
                <div className='flex flex-col mt-7'>
                    <h4 className='uppercase text-sm font-medium mb-3'> Title </h4>
                    <div className='flex'>

                    </div>
                </div>
            </div>
            <div  className='flex mb-24'>
            <div className='bg-productBG py-3 px-5 mr-3'>
                <Image height={90} width={40} src={image3} alt="3" />
                </div>
                <div className='flex flex-col mt-7'>
                    <h4 className='uppercase text-sm font-medium mb-3'> Title </h4>
                    <div className='flex'>

                    </div>
                </div>
            </div>
            <Image src={add}  alt="add" />
        </div>
    )
}

export default ProductsFilter;
