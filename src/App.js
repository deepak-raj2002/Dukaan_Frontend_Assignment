import react from 'react';
import Features from './Components/features/Features';
import Footer from './Components/footer/Footer';
import FreeProducts from './Components/freeProducts/Freeproducts';
import Home from './Components/home/Home';

const App=()=>{
  return (
    <>
      <Home/>
      <Features/>
      <FreeProducts/>
      <Footer/>
    </>
  )
};

export default App;