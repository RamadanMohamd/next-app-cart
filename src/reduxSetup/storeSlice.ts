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
            const modefier = (n: number) => {
                return action.payload.operation === "increment" ? n : -n
            }
            const modifiedState = {
                ...state,
                items: state.items.map((item) => {
                    if (item.product.sku === action.payload.product.sku) {
                        return { ...item, count: item.count + modefier(action.payload.count) }
                    }
                    return item
                }),
                total: state.total + modefier(action.payload.product.price)
            }
            return modifiedState

        },
        // Add item from item details or products views
        addItem: (state, action: PayloadAction<AddChangeItemInterFace>) => {
            const modifiedState = {
                ...state,
                items: [...state.items, {
                    product: action.payload.product,
                    count: action.payload.count
                }],
                count: state.count + 1,
                total: state.total + (action.payload.count * action.payload.product.price)
            }
            return modifiedState;
        },
        // remove item or if decrement and count === 1
        removeItem: (state, action: PayloadAction<removeItemInterFace>) => {
            const modifiedState = {
                ...state,
                items: state.items.filter(item => item.product.sku === action.payload.product.sku),
                count: state.count - 1,
                total: state.total - action.payload.product.price
            }
            return modifiedState
        },
    }
})

export const { changeItemCount, addItem } = storeSlice.actions

// export const selectCount = (state: RootState) => state.store.value

export default storeSlice.reducer