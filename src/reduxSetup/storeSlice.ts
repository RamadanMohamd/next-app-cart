import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AddChangeItemInterFace, removeItemInterFace, StoreState } from '../../types/reduxStore'

const initialState: StoreState = {
    items: [],
    count: 0,
    total: 0
}

export const storeSlice = createSlice({
    name: 'storeSlice',
    initialState,
    reducers: {
        // change count from store view
        changeItemCount: (state, action: PayloadAction<AddChangeItemInterFace>) => {
            const usedProductCount = action.payload.count ? action.payload.count : 1
            const usedOperation = action.payload.operation ? action.payload.operation : "increment" 
            const modefier = (n: number) => {
                return usedOperation === "increment" ? n : -n
            }
            const modifiedState = {
                ...state,
                items: state.items.map((item) => {
                    if (item.product.sku === action.payload.product.sku) {
                        return { ...item, count: item.count + modefier(usedProductCount) }
                    }
                    return item
                }),
                total: state.total + modefier(action.payload.product.price)
            }
            return modifiedState

        },
        // Add item from item details or products views
        addItem: (state, action: PayloadAction<AddChangeItemInterFace>) => {
            const usedProductCount = action.payload.count ? action.payload.count : 1
            const modifiedState = {
                ...state,
                items: [...state.items, {
                    product: action.payload.product,
                    count: usedProductCount
                }],
                count: state.count + 1,
                total: state.total + (usedProductCount * action.payload.product.price)
            }
            console.log(modifiedState)
            return modifiedState;
        },
        // remove item or if decrement and count === 1
        removeItem: (state, action: PayloadAction<removeItemInterFace>) => {
            const modifiedState = {
                ...state,
                items: state.items.filter(item => item.product.sku !== action.payload.product.sku),
                count: state.count - 1,
                total: state.total - action.payload.product.price
            }
            console.log(modifiedState)
            return modifiedState
        },
    }
})

export const { changeItemCount, addItem, removeItem } = storeSlice.actions

// export const selectCount = (state: RootState) => state.store.value

export default storeSlice.reducer