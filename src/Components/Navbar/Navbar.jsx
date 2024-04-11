import {Link} from'react-router-dom'
export default function Navbar(){
  return (
    <nav id='headerNav' className=" p-[2rem] flex gap-[1.5rem] justify-center text-stone-700">
      <h2 className='displayNone'>Primary Header Navigation</h2>
      <Link to="/" className='hover:text-white transition text-[1.5rem] font-medium flex gap-[.2rem]'>
        <i className="fa-solid fa-house"></i>
        <span className='underline'>Home</span>
      </Link>
      <Link to="/#menu" className='hover:text-white transition text-[1.5rem] font-medium flex gap-[.2rem]'>
        <i className="fa-regular fa-list"></i>
        <span className="underline">Menu</span>
        </Link>
      <Link to="/about-app" className='underline hover:text-white transition text-[1.5rem] font-medium'>About</Link>
      <Link to="https://www.linkedin.com/in/alex21c/" className=' hover:text-white transition text-[1.5rem] font-medium flex gap-[.2rem]'>
        <i className="fa-solid fa-address-book"></i>
        <span className="underline">Contact Us</span>
        
        </Link>
    </nav>
  );
}