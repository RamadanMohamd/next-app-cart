import type { NextPage } from 'next'
import MainLayout from '../src/layouts/main'
import { useAppDispatch } from '../src/reduxSetup/config'
import { changeHeaderTitle } from '../src/reduxSetup/headerSlice'

const Home: NextPage = () => {

  const dispatch = useAppDispatch()
  dispatch(changeHeaderTitle({ title: "SURFING" }))
  return (
    <MainLayout>


    </MainLayout>
  )
}

export default Home
