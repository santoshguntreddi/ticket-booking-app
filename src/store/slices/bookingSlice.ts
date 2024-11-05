import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface BookingInterface {
  value: any[];
}

const initialState: BookingInterface = {
  value: [],
};

const bookingSlice = createSlice({
  name: "bookingSlice",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<any>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
