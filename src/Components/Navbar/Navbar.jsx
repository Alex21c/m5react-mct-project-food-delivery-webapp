import './Navbar.css';
import {Link} from'react-router-dom'
import { ContextFoodCartWebApp } from '../Context/ContextFoodCartWebApp';
import { useContext } from 'react';
import { useState } from 'react';



export default function Navbar(){
  let {stateWhoIsCurrentPage, stateNavbarVisibility, updateStateNavbarVisibility} = useContext(ContextFoodCartWebApp);


  ////console.log(stateWhoIsCurrentPage);
  return (
    <nav id='headerNav' style={stateNavbarVisibility} className={`relative bg-gradient-to-br from-yellow-200 to-yellow-300  p-[2rem] flex gap-[1.5rem] justify-center text-stone-700 rounded-md ${stateNavbarVisibility}`}>
      <h2 className='displayNone'>Primary Header Navigation</h2>
      <Link to="/" className='hover:text-white transition text-[1.5rem] font-medium flex gap-[.2rem]'>
        <i className="fa-solid fa-house"></i>
        <span className={`${stateWhoIsCurrentPage === 'Homepage' ? "underline" : "" }`}>Home</span>
      </Link>
      {/* <Link to="/#menu" className='hover:text-white transition text-[1.5rem] font-medium flex gap-[.2rem]'>
        <i className="fa-regular fa-list"></i>
        <span className="underline">Menu</span>
        </Link> */}
      <Link to="/about-app" className='hover:text-white transition text-[1.5rem] font-medium'>
        <span className={`${stateWhoIsCurrentPage === 'About' ? "underline" : "" }`}>About</span>
      </Link>
      <Link to="https://www.linkedin.com/in/alex21c/" className=' hover:text-white transition text-[1.5rem] font-medium flex gap-[.2rem]'>
        <i className="fa-solid fa-address-book"></i>
        <span className={`${stateWhoIsCurrentPage === 'ContactUs' ? "underline" : "" }`}>Contact Us</span>
        
        </Link>
        <div className={`wrapperCloseIcon absolute top-[1rem] right-[1rem] ${stateNavbarVisibility}`} onClick={()=>{updateStateNavbarVisibility({})}} >
          <i className="text-stone-700 fa-solid fa-circle-xmark text-[2.5rem] hover:text-emerald-600 transition"></i>
        </div>
    </nav>
  );
}
