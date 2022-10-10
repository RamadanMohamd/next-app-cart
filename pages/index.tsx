import type { NextPage } from 'next'
import MainLayout from '../src/layouts/main'
import { useAppDispatch } from '../src/reduxSetup/config'
import { changeHeaderTitle } from '../src/reduxSetup/headerSlice'
import ProductsContainer from '../src/components/products/product-container'
import { useEffect } from 'react'

const Home: NextPage = () => {
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

export default Home
