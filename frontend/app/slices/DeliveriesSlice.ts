"use client";

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DeliveriesState, DeliveryCardProps } from "../types/types";

const initialState: DeliveriesState = {
  entity: [],
  loading: false,
  error: null,
  filtredStatus: null,
  page: 1,
  limit: 5,
  hasMore: true,
};

// Асинхронный санк для закгрузки доставок
export const fetchDeliveries = createAsyncThunk(
  "deliveries/fetchDeliveries",
  async ({ page, limit }: { page: number; limit: number }) => {
    const response = await fetch(
      `http://localhost:3001/entity?_page=${page}&_limit=${limit}`
    )
    console.log(response);
    if (!response.ok) {
      throw new Error(`Ошибка сервера: ${response.status}`);
    }
    const data = await response.json();
    return data as DeliveryCardProps[];
  }
);
const deliveriesSlice = createSlice({
  name: "deliveries",
  initialState,
  reducers: {
    changeSearchStatus: (state, action: PayloadAction<string>) => {
      console.log(action.payload)
      console.log(state.filtredStatus)
      if('ALL' === action.payload ){
        state.filtredStatus = null
      }else{
        state.filtredStatus = action.payload;
      }
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeliveries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchDeliveries.fulfilled,
        (state, action: PayloadAction<DeliveryCardProps[]>) => {
          state.loading = false;
          state.entity = [...state.entity, ...action.payload];
          state.page += 1;

          if (state.entity.length >= 10) {
            state.hasMore = false;
          }
        }
      )
      .addCase(fetchDeliveries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка при загрузке доставок";
      });
  },
});
export const { changeSearchStatus } = deliveriesSlice.actions;
export default deliveriesSlice.reducer;
