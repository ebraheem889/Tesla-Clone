import { createSlice, PayloadAction } from '@reduxjs/toolkit'

 
const initialState = ["Existing Inventory" ,"Used Inventory" , "Trade-In" ,"CyberTruck" ,"Roadaster","Semi" ,"Charging","Powerwall ",
                      " Commercial Energy" ,"Utilities","Find Us","Support","Investor Relations"];

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = sidebarSlice.actions


export default sidebarSlice.reducer