
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../reduxSetup/config'
import ProductComponent from '../product'
import { useEffect } from 'react'
import { fetchProducts } from 'reduxSetup/productsSlice'

const ProductsList: React.FC<any> = () => {

    const { items } = useAppSelector(state => state.products)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className='col-span-9 grid grid-cols-9 gap-x-8 gap-y-20 my-10'>
            {
                items.map((product) => {
                    return <ProductComponent key={product.sku} {...product} />
                })
            }
        </div>
    )
}

export default ProductsList;
