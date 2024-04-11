import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import './Product.css';
import DB from '../../Database.json';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";


export default function Product(){
  const {productID, productCategory} = useParams();
  let [stateProduct, udpateStateProduct] = useState({});

  function fetchProduct(productID, productCategory){
    return DB[productCategory].filter(product=>product.id === productID);
  }
 

  useEffect(()=>{    
    // console.log(productID, productCategory, DB);    
    udpateStateProduct(fetchProduct(productID, productCategory)[0]);
    // fetchLocalProduct();
  }, [])


  // useEffect(()=>{
  //   console.log(stateProduct.image)
  // }, [stateProduct]);
  
  return (
    <div className="mt-[2rem] pt-[1rem] border-0 border-slate-200 p-[2rem] w-[120rem]  m-auto rounded-md  text-[1.2rem] text-stone-200 ">
      <Header/>  

      <div id='wrapperProduct' className='flex flex-col items-center bg-gradient-to-br from-emerald-700 to-emerald-800'>
        {

          stateProduct?.id  && 
          <div className="wrapperInnerProduct flex flex-col gap-[1rem]  p-[2rem] max-w-[80rem]">
            <h2 className="smallCaps text-[2rem] font-semibold mt-[1rem]">Product #{productID} {stateProduct.title}</h2>
            <div className="">

              <dl className=" flex flex-col gap-[1rem] ">
                <div className="wrapperProdudctImgAndDescPlusIngredients flex  gap-[1rem]">
                  <div className="wrapperDescriptionAndIngredients w-[60%] flex flex-col gap-[1rem]">
                    <div>
                      <dt className="bg-green-300 text-stone-700 font-semibold px-[1rem] py-[.3rem] mb-[.5rem]">Description</dt>
                      <dd className="flex flex-col gap-[1rem]">{stateProduct.description.map((description, idx)=><p key={`description-${idx}`}>{description}</p>)}</dd>
                    </div>
                    <div>
                      <dt className="bg-green-300 text-stone-700 font-semibold px-[1rem] py-[.3rem] mb-[.5rem]">Price</dt>
                      <dd className="font-semibold">₹{stateProduct.price}/- Only</dd>
                    </div>
                  </div>
                  <div className="w-[40%]">
                  <button>Add to Cart</button>
                    <div className="productImage rounded-md overflow-hiddenmax-h-[25rem]">              
                        <img className="w-[100%] h-[100%] object-cover" src={require(`../../Assests/Images/${stateProduct.image}`)} alt={`Image ${stateProduct.title}`}/>                  
                    </div>
                    
                  </div>
                </div>


      

              </dl>
            </div>
          </div>
        }
        


        
      </div>
      <Footer/>
    </div>    
  );
}