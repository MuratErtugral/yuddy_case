import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { createTransform } from 'redux-persist';
import cartReducer from '../features/carts/cartSlice';


const removeNonSerializableValues = createTransform(
  (inboundState, key) => {
  
    return inboundState;
  },
  (outboundState, key) => {

    return outboundState;
  },
  { whitelist: ['cart'] } 
);

const persistConfig = {
  key: 'root',
  storage,
  transforms: [removeNonSerializableValues],
};

const rootReducer = combineReducers({
  cart: cartReducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
