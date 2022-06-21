import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'api/axios';
import { AxiosError } from 'axios';

// export const fetchHouses = () => async (dispatch: AppDispatch) => {
//   try {
//     const response = await API.get(`/house`)
//   } catch (error) {

//   }
// }

interface IHouse {
  city: string;
  houseNum: string;
  region: string;
  square: string;
  street: string;
  year: string;
}

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

export const fetchHouses = createAsyncThunk('house/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await API.get('/house');
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue('не удалось загрузить объекты');
  }
});

export const fetchHouseById = createAsyncThunk('house/fetchById', async (id: number, thunkAPI) => {
  try {
    const response = await API.get(`/house/${id}`);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue('не удалось загрузить объект');
  }
});

export const createHouse = createAsyncThunk('house/create', async (house: IHouse, thunkAPI) => {
  try {
    const response = await API.post(`/house`, house);
    return response;
  } catch (err: any | AxiosError) {
    let error: AxiosError<ValidationErrors> = err;
    return thunkAPI.rejectWithValue(error?.response?.data);
  }
});
