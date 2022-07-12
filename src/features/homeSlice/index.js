import { createSlice, PayloadAction } from '@reduxjs/toolkit'

 
const initialState = [ 
                    {   title: "Model 3", 
                        Description:"Order Online for Touchless Delivery" ,
                        LeftButton:"Custom Order",
                        RightButton:"Existing Inventory", 
                        bgimgUrl:"/images/model-3.jpg",},
                    
                    {   title: "Model Y" ,
                        Description:"Order Online for Touchless Delivery" ,  
                        LeftButton:"Custom Order" ,
                        RightButton:"Existing Inventory" , 
                        bgimgUrl:"/images/model-y.jpg",
                    },
                    {   title:"Model X" ,
                        Description:"Order Online for Touchless Delivery",  
                        LeftButton:"Custom Order",
                        RightButton:"Existing Inventory", 
                        bgimgUrl:"/images/model-x.jpg",
                    },
                    {
                        title: "Model X" ,
                        Description:"Order Online for Touchless Delivery" , 
                        LeftButton:"Custom Order",
                        RightButton:"Existing Inventory", 
                        bgimgUrl:"/images/new-interior.jpg"
                    }
                    ,{
                        title: "Model X" ,
                        Description:"Order Online for Touchless Delivery" , 
                        LeftButton:"Custom Order" ,
                        bgimgUrl:"/images/accessories.jpg"
                    },
                    {
                        title: "Solar Roof" ,
                        Description:"Order Online for Touchless Delivery" , 
                        bgimgUrl:"/images/solar-roof.jpg"
                    },
                    {
                        title: "Solar Panel" ,
                        Description:"Order Online for Touchless Delivery" , 
                        bgimgUrl:"/images/solar-panel.jpg"
                    }
                ];

export const homeSlices = createSlice({
  name: 'Home',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = homeSlices.actions


export default homeSlices.reducer