import type { NextPage } from 'next'
import MainLayout from '../../src/layouts/main'
import ProductsContainer from '../../src/components/products/product-container'
import { useAppDispatch } from 'reduxSetup/config'
import { useEffect } from 'react'
import { changeHeaderTitle } from '../../src/reduxSetup/headerSlice'
const Products: NextPage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
      dispatch(changeHeaderTitle({ title: "PRODUCTS" }))
    }, [])
    return (
        <MainLayout>
            <ProductsContainer />
        </MainLayout>
    )
}

export default Products;
