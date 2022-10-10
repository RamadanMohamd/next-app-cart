

import React from 'react'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../src/reduxSetup/config'
import { fetchProducts } from '../../src/reduxSetup/productsSlice'

const MyComponent: React.FC<any> = () => {

    const { products } = useAppSelector((state) => state)

    useEffect(() => {
        console.log(products)
    }, [products])

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <>Mine</>
    )
}

export default MyComponent;
