import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Technologies from "./Components/TechnologyCard/Technologies";

const technologyPromise = async()=>{
  const res = await fetch('/public/data.json')
  const data = await res.json();
  return data;
}
function App() {
 console.log(technologyPromise)

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Technologies technologyPromise={technologyPromise}></Technologies>
    
    </>
  )
}

export default App
