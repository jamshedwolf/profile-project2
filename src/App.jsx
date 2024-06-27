import { useEffect } from 'react'


import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Nav from './componenets/Nav'
import Home from './pages/Home'
import Services from './pages/Services';
import Experience from './pages/Experience';
import Testamonials from './pages/Testamonials';
import Footer from './pages/Footer';
import Projects from './pages/Projects';


function App() {
  useEffect(() => {
    AOS.init( {duration: 2000});
  }, [])

  return (


    <>
<div className="overflow-x-hidden">
<Nav/>
<Home/>
<Services/>
<Experience/>
<Projects/>
<Testamonials/>

<Footer/>
</div>
    </>
  )
}

export default App
