import Autumn from "./components/Autumn"
import BigBend from "./components/BigBend"
import Closing from "./components/Closing"
import Cont1 from "./components/Cont1"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Mountain from "./components/Mountain"
import NavBar from "./components/NavBar"
import Part2 from "./components/Part2"
import Recover from "./components/Recover"
import './app.css'

function App() {


  return (
    <>
     <div className="about">
     <NavBar/>
     <Hero/>
     <Cont1/>
     <BigBend/>
     <Recover/>
     <Part2/>
     <Autumn/>
     <Mountain/>
     <Closing/>
     <Footer/>
     </div>
    </>
  )
}

export default App
