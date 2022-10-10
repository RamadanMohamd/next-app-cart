import type { NextPage } from 'next'
import { useEffect } from 'react'
import MainLayout from '../src/layouts/main'
import { fetchProducts } from '../src/reduxSetup/productsSlice'
import { persistor, store } from '../src/reduxSetup/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import MyComponent from '../src/components/MyComponent';

const Products: NextPage = () => {
    return (
        <Provider store={store as any}>
            <PersistGate loading={null} persistor={persistor}>
                <MainLayout>
                <MyComponent />
                </MainLayout>
            </PersistGate>
        </Provider>
    )
}

export default Products;
