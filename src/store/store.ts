import HouseReducer from './reducers/houseSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { HouseReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
