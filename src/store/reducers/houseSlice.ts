import { createSlice } from '@reduxjs/toolkit';
import { createHouse, fetchHouses } from './actionCreators';

type IHouse = {
  city: string;
  createdAt?: string;
  houseNum: string;
  id: string;
  region: string;
  square: number;
  street: string;
  updatedAt: string;
  year: string;
};

interface HouseState {
  items: IHouse[];
  isLoading: boolean;
  error: string | null;
}

const initialState: HouseState = {
  items: [],
  isLoading: false,
  error: null,
};

export const HouseSlice = createSlice({
  name: 'house',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchHouses.fulfilled.type]: (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchHouses.rejected.type]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
      state.items = [];
    },
    [fetchHouses.pending.type]: (state) => {
      state.isLoading = true;
    },

    [createHouse.pending.type]: (state) => {
      state.isLoading = true;
    },
    [createHouse.fulfilled.type]: (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.items = action.payload;
    },
    [createHouse.rejected.type]: (state, action) => {
      state.error = action.payload.message;
      state.isLoading = false;
    },
  },
});

export default HouseSlice.reducer;
