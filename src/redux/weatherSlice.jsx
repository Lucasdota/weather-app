import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCityData = createAsyncThunk("city", async (obj) => {
    try {
      const request = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${obj.city}&appid=2fdc366ded241ce8aef2fffae5a792d4`
      );
      const response = await request.json();
      return {
        data: response,
        error: null,
      };
    } catch (error) {
			return {
				data: null,
				error: error.message,
			};
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    citySearchingLoading: false,
    citySearchData: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCityData.pending, (state) => {
        state.citySearchingLoading = true;
        state.citySearchData = null
      })
      .addCase(getCityData.fulfilled, (state, action) => {
        state.citySearchingLoading = false;
        // Check if the response status is 404
        if (action.payload.data && action.payload.data.cod === "404") {
          state.citySearchData = undefined;
        } else {
          state.citySearchData = action.payload;
        }
      });
  },
});

export default weatherSlice.reducer;
