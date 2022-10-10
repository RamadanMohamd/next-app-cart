import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HeaderState } from '../../types/reduxHeader'

const initialState: HeaderState = {
    title: ''
}

export const headerSlice = createSlice({
    name: 'storeSlice',
    initialState,
    reducers: {
        changeHeaderTitle: (state, action: PayloadAction<HeaderState>) => {
            return {
                ...state,
                title: action.payload.title
            }
        },
    }
})

export const { changeHeaderTitle } = headerSlice.actions

export default headerSlice.reducer