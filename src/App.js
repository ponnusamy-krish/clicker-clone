



function App() {
  return (

<>
<Nav />
</>

  );
}



function Nav(){
  return(
  <>
  <div className="h-[10vh] w-screen bg-black bg-opacity-10 grid grid-cols-[1fr_4fr_1fr]">


  <div className=" "> <p className="font-thin text-3xl m-3">CLICKER</p>
  
  </div>
  <div className="flex justify-center items-center "> <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-[50%] bg-white pl-2 " >
<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg><input  type="text"  placeholder="search " className="pl-1 w-[80%] h-[50%] focus:outline-none focus:border-none placeholder:text-[20px] hidden md:flex"/></div>
  <div className="bg-orange-500 flex align-center justify-around">
    <button>Log in</button>
  <button className="bg-white self-center h-[50%] w-[40%] font-bold font-mono">sign up</button>
  </div>
  </div>
  </>
  )
}


export default App;
