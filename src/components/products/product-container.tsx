import React from 'react'
import ProductsList from './products-list';
import ProductsFilter from './products-filter';

const ProductsContainer: React.FC<any> = () => {
    return (
        <div className='self-start my-12 font-opensans'>
            <div className=' grid grid-cols-9 gap-8 '>
                <ProductsList />
                <ProductsFilter />
            </div>
        </div>
    )
}

export default ProductsContainer;
