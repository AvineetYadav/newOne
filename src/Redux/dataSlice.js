import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    fetchData: null,
      selectedCourse: null,
    enrolledCourses: [],
  },
  reducers: {
    addData: (state, action) => {
      state.fetchData = action.payload;
    },
    selectCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
    enrolledCourses: (state, action) => {
      state.enrolledCourses?.push(action.payload); 
    },
  },
});

export const { addData, selectCourse,enrolledCourses,removeEnrolledCourses } = dataSlice.actions;
export default dataSlice.reducer;
