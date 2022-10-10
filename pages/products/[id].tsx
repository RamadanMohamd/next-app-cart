import type { NextPage } from 'next'
import MainLayout from '../../src/layouts/main'
import { Product } from '../../types/product'
import { useAppSelector } from '../../src/reduxSetup/config'
import { useRouter } from 'next/router'
const ProductDetails: NextPage = () => {


    const router = useRouter()
    const { id } = router.query


    const { items } = useAppSelector((state: any) => state.products)
    const currentProduct = items.find((pro: Product) => pro.sku === Number(id))
    console.log(currentProduct)
    return (
        <MainLayout>

        </MainLayout>
    )
}

export default ProductDetails;
