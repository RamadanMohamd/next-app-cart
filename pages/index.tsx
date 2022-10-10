import type { NextPage } from 'next'
import MainLayout from '../src/layouts/main'
import { useAppDispatch } from '../src/reduxSetup/config'
import { changeHeaderTitle } from '../src/reduxSetup/headerSlice'
import ProductsContainer from '../src/components/products/product-container'

const Home: NextPage = () => {

  const dispatch = useAppDispatch()
  dispatch(changeHeaderTitle({ title: "SURFING" }))

  return (
    <MainLayout>
      <ProductsContainer />
    </MainLayout>
  )
}

export default Home
