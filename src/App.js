



function App() {
  return (

<>
<div className="bg-[url('https://picsum.photos/1400/650')] h-[100vh] bg-no-repeat">

<Nav />
<Body />
<BottonNav />
</div>
</>

  );
}



function Nav(){
  return(
  <>
  <div className="h-[10vh] w-screen bg-black bg-opacity-20 grid grid-cols-[1fr_4fr_1fr]">


  <div className=" "> <p className="font-sans font-bold text-white text-3xl m-3">CLICKER</p>
  
  </div>
  <div className="flex justify-center items-center "> <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-[50%] bg-white pl-2 " >
<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg><input  type="text"  placeholder="search " className="pl-1 w-[80%] h-[50%] focus:outline-none focus:border-none placeholder:text-[20px] hidden md:flex"/></div>
  <div className=" flex align-center justify-around">
    <button className="text-white">Log in</button>
  <button className="bg-white self-center h-[50%] w-[40%] font-bold font-mono">sign up</button>
  </div>
  </div>
  </>
  )
}

function Body(){

  return(
    <>
    <div className=" h-[82%] flex flex-col items-center gap-9 justify-center">
<h1 className="text-5xl text-white font-bold">FIND YOUR PASSION</h1>
<p className="text-2xl text-white">
Join the clicker community, home to tens of billions of photos and 2 million groups.
</p>
<button className="h-11 bg-white w-40 rounded-md">START FOR FREE</button>
    </div>
    </>
  )
}


function BottonNav(){
  return(

    <>
    <div className="bg-black md:h-[8%] text-white flex gap-5 ">
<button className="ml-5">About</button>
<button>Blogs</button>
<button>Guidelines</button>
<button>Help forum</button>
<button>conditions</button>
<button>Terms</button>
<button>News</button>
<button>Language</button>
<button>Jobs</button>
<button>Developers</button>
<button>Help</button>
<button>privacy</button>
<button>Terms</button>
<button>Cookies</button>
<button>More</button>



    </div>
    
    </>
  );
}
export default App;
