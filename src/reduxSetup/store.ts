import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import headerSlice from './headerSlice'
import productsSlice from './productsSlice'
import storeSlice from './storeSlice'

const rootReducer = combineReducers({
  products: productsSlice,
  store: storeSlice,
  header: headerSlice
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
