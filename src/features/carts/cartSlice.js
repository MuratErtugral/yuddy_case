import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  modal: {
    isOpen: false,
    product: null,
    quantity: 0,
    discountPrice: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const quantity = action.payload.quantity ? action.payload.quantity : 1;
      const discountPrice = parseFloat(
        (
          action.payload.price *
          (1 - action.payload.discountPercentage / 100)
        ).toFixed(2)
      );
      state.cart.push({
        ...action.payload,
        quantity: quantity,
        discountPrice: discountPrice,
      });
      state.modal = {
        isOpen: true,
        product: action.payload,
        quantity: quantity,
        discountPrice: discountPrice,
      };
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
    openModal: (state, action) => {
      state.modal = {
        isOpen: true,
        product: action.payload,
        quantity: action.payload.quantity || 1,
        discountPrice: parseFloat(
          (
            action.payload.price *
            (1 - action.payload.discountPercentage / 100)
          ).toFixed(2)
        ),
      };
    },
    closeModal: (state) => {
      state.modal = {
        isOpen: false,
        product: null,
        quantity: 0,
        discountPrice: 0,
      };
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  openModal,
  closeModal,
} = cartSlice.actions;
export default cartSlice.reducer;
