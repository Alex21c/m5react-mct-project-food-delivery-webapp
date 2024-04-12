import { createContext } from "react";
import { useState } from "react";
import { useReducer } from "react";
import DB from '../../Database.json';
import { useEffect } from "react";
export const ContextFoodCartWebApp = createContext(null);
function reducer(state, action){
  // fetching product quantity
    let productQuantity = 0;   


  // taking action based on type
  function removeProduct(){
    let previousState = {...state};        
    let uniqueID  = `${action.payload.productCategory}-${action.payload.productID}`;        
    delete previousState['products'][uniqueID];        
    return {
      ...previousState
    };  
  }

  switch(action.type){
    case "removeProduct":
      return removeProduct();
    case "decreaseQuantity":
      if(Number(action.payload.quantity) - 1 === 0 ){
        // then i need to remove this product from the cart
        return removeProduct();
      }

      return {
        ...state,
        products: {
          ...state.products,                           
          [`${action.payload.productCategory}-${action.payload.productID}`]: {
            ...state.products[`${action.payload.productCategory}-${action.payload.productID}`],
            quantity: Number(action.payload.quantity) - 1,
                             
          }
        }           
               

      }
    case "increaseQuantity":
      //console.log('hahaha i found you!');
      //console.log(action.payload);
      return {
        ...state,
        products: {
          ...state.products,                           
          [`${action.payload.productCategory}-${action.payload.productID}`]: {
            ...state.products[`${action.payload.productCategory}-${action.payload.productID}`],
            quantity: Number(action.payload.quantity) + 1,
                             
          }
        }           
               

      }
    
    case "updateProductQuantity":
      productQuantity =  Number(action.payload.quantity);
      // //console.log(action.payload);
      // //console.log('updating wait...');
      // if quantity is less than 0 then just delete from cart
        if(Number(productQuantity) === 0 ){
          return removeProduct();
        }
      // otherwise just udpate the quantity
        else {
          return {
            ...state,
            products: {
              ...state.products,                           
              [`${action.payload.productCategory}-${action.payload.productID}`]: {
                quantity: productQuantity,
                id: action.payload.productID,
                category: action.payload.productCategory,
                title: action.payload.title,
                price: action.payload.price,
                imagePath: action.payload.imagePath
                                 
              }
            }           
                   

          }
        }      
    default:
    return state;
  }
}
  //  helper function
  function mergerAllProductsTogetherIntoSingleArray(){
    // attaching category to each product so that it can effectivly navgiate and identify each product
      let products = DB.Categories.map(category=>{
        // console.log(DB[category])
        return DB[category].map(product=>{
          // console.log(category)
          // console.log(product);
          return {
            ...product,
            'category': category
          }
        })

      });
    // reducing into one common array
    products = products.reduce((accumulator, products)=>{
      products.map(product=>{
        accumulator.push(product)
        return accumulator;
        // console.log(product)
      })
      return accumulator;
    }, [])
    // console.log(products)
    return products;
  }


const ContextProviderFoodCartWebApp = ({children}) =>{
  // let [stateCart, updateStateCart] = useState('this is the intial state of the cart');
  // let template= "this is the template";

  let initialStateFromLocalStorage = localStorage.getItem ('alex21cFoodDeliveryWebApp');
  let cartInitialState = {};

  if(initialStateFromLocalStorage){
    cartInitialState = JSON.parse(initialStateFromLocalStorage);
  }else{
    cartInitialState = {
    products:{}, 
    cartTotal:0,
    totalItemsInCart: 0,
   };
  }    


  let [stateCart, dispatch] = useReducer(reducer, cartInitialState);

  let [stateWhoIsCurrentPage, updateStateWhoIsCurrentPage] = useState(null);

  let [stateListOfProducts, updateStateListOfProducts] = useState({});

  let [stateInitialListOfProducts, updateStateInitialListOfProducts] = useState({});   

   // initial lodaing of products
   useEffect(()=>{
    let initialListOfProductsMerged = mergerAllProductsTogetherIntoSingleArray()
    updateStateInitialListOfProducts(initialListOfProductsMerged);
    updateStateListOfProducts(initialListOfProductsMerged);  
  },[]);
  
  function updateLocalStorage(newState){
    localStorage.setItem ('alex21cFoodDeliveryWebApp', JSON.stringify(newState));

  }
  useEffect(()=>{
    updateLocalStorage(stateCart)
  }, [stateCart]);


  
  const contextValue = {
    // template, stateCart
    stateCart, dispatch, stateWhoIsCurrentPage, updateStateWhoIsCurrentPage,
    stateListOfProducts, updateStateListOfProducts, stateInitialListOfProducts, updateStateInitialListOfProducts
  };

  
  return (
    <ContextFoodCartWebApp.Provider value={contextValue}>
      {children}
    </ContextFoodCartWebApp.Provider>

  );
}

export default ContextProviderFoodCartWebApp;