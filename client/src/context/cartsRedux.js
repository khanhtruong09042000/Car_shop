import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quanity: 0,
    total: 0,
  },
  reducers: {
    addProducts: (state, action) => {
          state.quanity += 1;
         state.products.push(action.payload)
          toast.success("Product added  to cart !",{
            position: "bottom-center"
      })
    state.total += action.payload.price * action.payload.quanity ;     
    },
    
    removeProducts: (state,action)=>{
        state.quanity -= 1
        state.products.map((items)=>{
          if(items._id === action.payload._id){
            const nextCartItem = state.products.filter(
              (item)=>item._id !== items._id
            )
            state.products = nextCartItem;
          }
        })
        state.total -= action.payload.price * action.payload.quanity 
        toast.info("Product removed  to cart !",{
          position: "bottom-center"
      });
    }
  },
});
 
export const { addProducts, removeProducts } = cartSlice.actions;
export default cartSlice.reducer;
