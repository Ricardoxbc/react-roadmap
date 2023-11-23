import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ItemT = {
    id: string
    text: string
    buyed: boolean
}

const initialState : ItemT[] = []

const defaultSlice = createSlice({
    name: "defaultSlice",
    initialState,
    reducers: {
        add: (state, action : PayloadAction<ItemT>) => {
            console.log({action})
            state.push(action.payload)
        },
        remove: (state, action : PayloadAction<string>) => {
            return state.filter(item => item.id !== action.payload)
        },
        change: (state, action : PayloadAction<string>) => {
            const index = state.findIndex((item) => item.id === action.payload)
            if (index < 0) return
            state[index].buyed = !state[index].buyed
        }
    }
})

export default defaultSlice.reducer

export const {add, remove, change} = defaultSlice.actions