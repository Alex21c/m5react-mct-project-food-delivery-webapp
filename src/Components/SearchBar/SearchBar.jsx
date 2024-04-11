export default function SearchBar(){
  return (
    <div className="relative min-w-[20rem]">
      <input type="search" placeholder="Search Food from Menu..." className=" text-stone-700 transition focus:outline focus:outline-2 focus:outline-green-500 p-[1rem] pr-[3rem] rounded-md bg-stone-200 relative w-[100%]" />
      <i className="fa-sharp fa-solid fa-magnifying-glass absolute top-[.5rem] right-[.5rem] text-[1.8rem] text-stone-700"></i>
    </div>
  );
}