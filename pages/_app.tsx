import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { fetchProducts } from '../src/reduxSetup/productsSlice'
import { persistor, store } from '../src/reduxSetup/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store as any}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
