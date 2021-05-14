import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/user.slice';
import { productSlice } from './slices/product.slice';

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    products: productSlice.reducer,
  },
});
