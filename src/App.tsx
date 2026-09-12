
import { Suspense } from "react";
import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Technologies from "./Components/TechnologyCard/Technologies";
import type { TechnologyType } from "./types/technologyType";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";


const technologyFetch = async():Promise<TechnologyType[]>=>{
  const res = await fetch('public/data.json')
  const data = await res.json();
  return data;
}
function App() {

 const technologyPromise = technologyFetch();
 


  return (
    <>
     <Navbar></Navbar>

     <Banner></Banner>

     <Suspense fallback={<h2 className="text-center font-stretch-condensed text-pink-500 mt-10">Loading Available Technologies............</h2>}>
<Technologies technologyPromise={technologyPromise}></Technologies>
     </Suspense>
<Toaster position="top-right" toastOptions={{ duration: 1500 }}></Toaster>

    
    <Footer></Footer>
    </>
  )
}

export default App
