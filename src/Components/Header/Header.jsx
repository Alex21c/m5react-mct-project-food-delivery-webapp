import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
export default function Header(){
  return (
    <header className="flex bg-yellow-300 items-center justify-between p-[1rem]">
      <h2 className="">Rasaurant</h2>
      <Navbar/>
      <div className="flex gap-[2rem] items-center">
        <SearchBar/>
        <i className="fa-solid fa-cart-shopping text-[1.8rem] text-stone-900"></i>        
        <button className="select-none flex gap-[1rem] items-center justify-center outline outline-2 outline-slate-900  hover:bg-yellow-400 transition cursor-pointer px-[1rem] py-[.5rem] rounded-full  text-slate-900    text-[1.3rem]  bg-yellow-300 hover:text-white">
            <i className="fa-solid fa-right-to-bracket text-[1.8rem]"></i>
            <span>Sign In</span>          
          </button>
      </div>
      
    </header>
  );
}