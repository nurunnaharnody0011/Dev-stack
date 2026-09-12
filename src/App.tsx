
import { Suspense } from "react";
import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Technologies from "./Components/TechnologyCard/Technologies";

const technologyFetch = async()=>{
  const res = await fetch('/public/data.json')
  const data = await res.json();
  return data;
}
function App() {

 const technologyPromise = technologyFetch();
 


  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Suspense fallback={<h2>Loading...</h2>}>
<Technologies technologyPromise={technologyPromise}>

</Technologies>
     </Suspense>

    
    </>
  )
}

export default App
