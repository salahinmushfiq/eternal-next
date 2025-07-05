// features/cart/cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from './types';


interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    incrementQty(state, action: PayloadAction<number>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQty(state, action: PayloadAction<number>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  incrementQty,
  decrementQty,
} = cartSlice.actions;

export default cartSlice.reducer;
