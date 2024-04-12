import { useParams } from "react-router-dom";
import { useContext, useReducer } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { ContextFoodCartWebApp } from "../../Components/Context/ContextFoodCartWebApp";
import CartItem from "../../Components/CartItem/CartItem";

export default function SignIn(){  
  let {stateWhoIsCurrentPage, updateStateWhoIsCurrentPage} = useContext(ContextFoodCartWebApp);

  useEffect(()=>{
    updateStateWhoIsCurrentPage('SignIn');
    
  },[]);

  return (
    <div className="mt-[2rem] pt-[1rem] border-0 border-slate-200 p-[2rem] max-w-[120rem]  m-auto rounded-md  text-[1.2rem] text-stone-200 ">
      <Header/>  

      <div  className='flex flex-col items-center bg-gradient-to-br from-emerald-700 to-emerald-800 pb-[5rem] pt-[1rem]'>
        <h2 className=" text-stone-200 flex gap-[.5rem] items-center">
            <i className="fa-solid fa-right-to-bracket text-[1.8rem]"></i>
            <span className="smallCaps text-[2rem] font-medium">Sign In</span>     
        </h2>
        


        
      </div>
      <Footer/>
    </div>    
  );
}