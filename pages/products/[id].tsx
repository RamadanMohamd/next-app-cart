import type { NextPage } from 'next'
import MainLayout from '../../src/layouts/main'
import { Product } from '../../types/product'
import { useAppSelector, useAppDispatch } from '../../src/reduxSetup/config'
import { useRouter } from 'next/router'
import { changeHeaderTitle } from '../../src/reduxSetup/headerSlice'
import { useEffect } from 'react'

const ProductDetails: NextPage = () => {


    const router = useRouter()
    const { id } = router.query
    const { items } = useAppSelector((state: any) => state.products)
    const dispatch = useAppDispatch()
    useEffect(() => {
        const currentProduct = items.find((pro: Product) => pro.sku === Number(id))
        dispatch(changeHeaderTitle({ title: currentProduct.name }))
    }, [])

    return (
        <MainLayout>

        </MainLayout>
    )
}

export default ProductDetails;
