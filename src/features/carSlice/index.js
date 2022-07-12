import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import axios from "axios";

 
const initialState = ["model 3" ,"model s" , "model y" ,"model x" ,"Solar Roof","Solar Panel"];

export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
export const { AssignCarstoSatate} = carSlice.actions


export default carSlice.reducer