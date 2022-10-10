import type { NextPage } from 'next'
import MainLayout from '../../src/layouts/main'
import ProductsContainer from '../../src/components/products/product-container'
const Products: NextPage = () => {
    return (
        <MainLayout>
            <ProductsContainer />
        </MainLayout>
    )
}

export default Products;
