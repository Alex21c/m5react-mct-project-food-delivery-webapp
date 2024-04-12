import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextFoodCartWebApp } from "../Context/ContextFoodCartWebApp";

export default function Header(){
  let {stateCart, dispatch} = useContext(ContextFoodCartWebApp);
  return (
    <header className="flex bg-gradient-to-br from-yellow-200 to-yellow-300 items-center justify-between p-[1rem] rounded-tl-md rounded-tr-md ">
      <Link to="/" title="Logo: Food Delivery App">
        <h2 className="flex gap-[.5rem] items-center   text-stone-100 font-bold bg-gradient-to-br from-emerald-500 to-emerald-700 p-[1rem] rounded-sm transition  hover:text-white hover:bg-green-600">
          <i className="fa-solid fa-leaf text-[3rem]"></i>  
          <span className="smallCaps text-[1.5rem]">Veg. Restaurant</span>
        </h2>
      </Link>
      <Navbar/>
      <div className="flex gap-[2rem] items-center">

        <Link to="/cart" className="relative">           
          <i title="Cart" className="fa-solid fa-cart-shopping text-[2.5rem] text-stone-700 transition hover:text-white cursor-pointer"></i>    
          { Object.keys(stateCart.products).length  >= 1 && 
            <i className="fa-solid fa-circle text-emerald-500 absolute top-[-.2rem] right-[-.4rem]"></i>
          }    
        </Link>


        <Link to="/SignIn">        
          <button className="select-none flex gap-[.5rem] items-center justify-center   hover:bg-yellow-400 transition cursor-pointer   text-stone-700    text-[1.3rem]   hover:text-white">
              <i className="fa-solid fa-right-to-bracket text-[1.8rem]"></i>
              <span className="text-[1rem]">Sign In</span>          
          </button>
        </Link>
      </div>
      
    </header>
  );
}