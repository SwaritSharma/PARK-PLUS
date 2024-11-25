import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Pages/Hero';


function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <Hero/>
    </>
  );
}

export default App;
