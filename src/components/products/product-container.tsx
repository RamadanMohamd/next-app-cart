import React from 'react'
import ProductsList from './products-list';
import ProductsFilter from './products-filter';
import ProductsSort from './products-sort'

const ProductsContainer: React.FC<any> = () => {
    return (
        <div className='self-start mt-24 mb-44 font-opensans'>
            <div className=' grid grid-cols-12 gap-8 '>
            <ProductsSort />

                <ProductsList />
                <ProductsFilter />
            </div>
        </div>
    )
}

export default ProductsContainer;
