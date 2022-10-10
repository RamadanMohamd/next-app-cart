import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import productsSlice from './productsSlice'
import storeSlice from './storeSlice'

const rootReducer = combineReducers({
    products: productsSlice,
    store: storeSlice,
  })

  const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(
      persistConfig,
      rootReducer
  ) as typeof rootReducer

  export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		})
})

export const persistor = persistStore(store as any)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


// import { persistor, store } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

// <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>