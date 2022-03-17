import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IFlower, IRoses} from "../../models/IFlower";
import {ICartItem} from "../../models/ICartItems";
import {RootState} from "../store";
import {IOrder} from "../../models/IOrder";
import {ISearch} from "../../models/ISearch";


interface FlowersState {
    flowers: IRoses[]
    cartItems: ICartItem[]
    orders: IOrder[]
    searchedItems: ISearch[]
    loading: boolean
    error: any
}

const initialState: FlowersState = {
    flowers: [],
    cartItems: [],
    orders: [],
    searchedItems: [],
    loading: false,
    error: null
}


export const fetchFlowers = createAsyncThunk<IFlower>(
    'flowers/fetchFlowers',
    async (data, {rejectWithValue}) => {
        try {
            const res = await fetch('/data/flowers.json')

            if (!res.ok) {
                new Error('Server error!')
            }
            const data: IFlower = await res.json()
            return data

        } catch (error: any) {
            return rejectWithValue(error.message)
        }


    }
)
const flowersSlice = createSlice({
    name: 'flowers',
    initialState,
    reducers: {
        add: (state: FlowersState, {payload}) => {
            const cartItem = state.cartItems?.find(item => item.cartItem.id === payload.id)
            if (cartItem) {
                cartItem.quantity += 1
            } else {
                state.cartItems.push({
                    cartItem: payload,
                    quantity: 1
                })
            }
        },
        remove: (state: FlowersState, {payload}) => {
            state.cartItems = state.cartItems?.filter(item => item.cartItem.id !== payload)
        },
        increment: (state: FlowersState, {payload}) => {

            const cartItem = state.cartItems?.find(item => item.cartItem.id === payload.id)
            if (cartItem) {
                cartItem.quantity += 1
            } else {
                const rose = state.flowers?.find(item => item.id === payload.id)
                if (rose) {
                    state.cartItems?.push({
                        cartItem: rose,
                        quantity: 1
                    })
                }
            }
        }
        ,
        decrement: (state: FlowersState, {payload}) => {
            const cartItem = state.cartItems?.find(item => item.cartItem.id === payload.id)
            if (cartItem) {
                cartItem.quantity -= 1
            }
        },
        addOrders: (state: FlowersState, {payload}) => {
            state.orders.push({
                order: payload,
                price: payload.price
            })
            state.cartItems?.splice(0)
        }
    },
    extraReducers: (builder) => {

        // When we send a request,
        // `fetchTodos.pending` is being fired:
        builder.addCase(fetchFlowers.pending, (state) => {
            // At that moment,
            // we change status to `loading`
            // and clear all the previous errors:
            state.loading = true
            state.error = null
        });

        // When a server responses with the data,
        // `fetchTodos.fulfilled` is fired:
        builder.addCase(fetchFlowers.fulfilled,
            (state, {payload}) => {
                // We add all the new todos into the state
                // and change `status` back to `idle`:
                state.flowers = payload.roses.flat(1)
                state.loading = false
            });

        // When a server responses with an error:
        builder.addCase(fetchFlowers.rejected,
            (state) => {
                // We show the error message
                // and change `status` back to `idle` again.
                state.error = 'huy'
            });
    },


})

export const {add, remove, increment, decrement, addOrders} = flowersSlice.actions
export default flowersSlice.reducer

export const selectItem = (state: RootState, id: number | string | undefined) => {
    return state.flowersReducer.flowers.find(el => el.id === Number(id))
}

export const selectCartItems = (state: RootState) => {
    return state.flowersReducer.cartItems
}

export const selectQuantityFromCart = (state: RootState, id: number | string | undefined) => {
    const item = state.flowersReducer.cartItems.find(el => el.cartItem.id === Number(id))
    return item?.quantity || 0
}