import { createContext } from "react";
import { useState } from "react";
import { useReducer } from "react";
export const ContextFoodCartWebApp = createContext(null);
function reducer(state, action){
  // fetching product quantity
    let productQuantity = 0;   

  // taking action based on type
  switch(action.type){
    case "updateProductQuantity":
      productQuantity =  Number(action.payload.quantity);
      // console.log(action.payload);
      // console.log('updating wait...');
      // if quantity is less than 0 then just delete from cart
        if(Number(productQuantity) === 0 ){
          let previousState = {...state};
          // console.log('wait product quantity is 0, deleting it...');
          let uniqueID  = `${action.payload.productCategory}-${action.payload.productID}`;
          // console.log('deleting ' + uniqueID);
          delete previousState['products'][uniqueID];
          // console.log(previousState);
          return {
            ...previousState
          };
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

const ContextProviderFoodCartWebApp = ({children}) =>{
  // let [stateCart, updateStateCart] = useState('this is the intial state of the cart');
  // let template= "this is the template";
  let cartInitialState = {
    products:{}, 
    cartTotal:0,
    totalItemsInCart: 0,
  };
  let [stateCart, dispatch] = useReducer(reducer, cartInitialState);




  const contextValue = {
    // template, stateCart
    stateCart, dispatch
  };
  return (
    <ContextFoodCartWebApp.Provider value={contextValue}>
      {children}
    </ContextFoodCartWebApp.Provider>

  );
}

export default ContextProviderFoodCartWebApp;