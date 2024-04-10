import {Link} from "react-router-dom";
import React, { useEffect, useState, Suspense} from 'react';
import DB from '../../Database.json';

import './Homepage.css'

export default function Homepage(){

  // setting state to store fetched api data    
    let [stateListOfProducts, updateListOfProducts] = useState({});
    

  // initial lodaing of products
    useEffect(()=>{
      // console.log(DB)
      updateListOfProducts(DB);
      // console.log('here is the data', stateListOfProducts) 
    },[]);

    useEffect(()=>{
      
      console.log('here is the data', stateListOfProducts.NorthIndian) ;
      stateListOfProducts?.NorthIndian?.map((data, idx)=>{
        console.log(data)
      })
    },[stateListOfProducts]);

  return (
    <div  className='flex flex-col items-center'>

      <div  id='productsGrid' className=' grid grid-cols-3 '>
        {
          stateListOfProducts['Categories']?.map(category=>stateListOfProducts[category]?.map((item, idx)=>{
            return (
                <Link to={`products/${item.id}`}  key={item.id}>
                  <div data-id={item.id} className=' flex flex-col gap-[1rem] p-[2rem] w[10rem] '> 
                    <div className='productImg w-[20rem] h-[20rem] shadow-md shadow-green-300 rounded-md overflow-hidden'>
                                                          
                        {/* <img src={loaderImg} className='w-[100%] h-[100%]' onLoad={(event)=>{event.target.src=item.image}} /> */}
                        {/* <img src={loaderImg} className='w-[100%] h-[100%]' onLoad={(event)=>{event.target.src=item.image}} /> */}
                        <img src={require(  `../../Assests/Images/${item.image}`)} className='w-[100%] h-[100%]' />
                      
                                        
                    </div>
                      <h2 className="max-w-[20rem]">{item.title}</h2>
                  </div>
                </Link>
            )
          }))
        }

      </div>


    </div>

    

  );
}


