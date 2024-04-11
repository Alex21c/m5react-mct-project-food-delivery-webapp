import { useParams } from "react-router-dom";
import { useContext, useReducer } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { ContextFoodCartWebApp } from "../../Components/Context/ContextFoodCartWebApp";
import CartItem from "../../Components/CartItem/CartItem";

export default function Cart(){
  let {stateCart, dispatch} = useContext(ContextFoodCartWebApp);
  
  console.log(stateCart);
  console.log(stateCart.products)
  
  return (
    <div className="mt-[2rem] pt-[1rem] border-0 border-slate-200 p-[2rem] max-w-[120rem]  m-auto rounded-md  text-[1.2rem] text-stone-200 ">
      <Header/>  

      <div  className='flex flex-col items-center bg-gradient-to-br from-emerald-700 to-emerald-800 pb-[5rem]'>
        <section className="flex flex-col gap-[2rem]">
          <h2 className="smallCaps text-slate-50 text-[2rem] text-center">Yours Shopping Cart</h2>
          <div>
            {
              Object.keys(stateCart.products).length  < 1 ? <div className="text-[2rem] text-center text-yellow-200">Yours Shopping Cart is Empty!</div> : ""

              
            }
          </div>
          <div className="wrapperAllProducts flex flex-col gap-[2rem]">
            {
            Object.entries(stateCart.products).map(([idx, product])=><CartItem key={idx} product={product} dispatch={dispatch}/>)

            }
          </div>
          <div className="wrapperTotal border-t-2 border-yellow-100 p-[1rem] flex justify-between">
            <h2 className="smallCaps text-slate-50 text-[2rem] font-semibold">Total</h2>
            <div className="font-semibold  outline outline-2 outline-amber-50 bg-yellow-300 hover:bg-yellow-500 transition cursor-pointer px-[2rem] p-[.5rem] rounded-md hover:text-slate-50 text-slate-900 text-[1.5rem]">
              ₹{stateCart.cartTotal}
            </div>
          </div>
          <div>
            <button className="outline-amber-50 bg-yellow-300 hover:bg-yellow-500 transition cursor-pointer px-[2rem] p-[.5rem] rounded-md hover:text-slate-50 text-slate-900 text-[1.5rem]" onClick={
              
              ()=>{
                dispatch({type:'clearTheCart'})
              }            
            }>Clear the Cart</button>
          </div>

        </section>
        


        
      </div>
      <Footer/>
    </div>    
  );
}