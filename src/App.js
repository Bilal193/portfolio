import Header, {ExpendableNAvBar} from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/app.scss"
import { Toaster } from "react-hot-toast";
import { useState } from "react";



function App() {

  const [menuOpen,setMenuOpen]=useState(false);
  
  return (
  <>
  <ExpendableNAvBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  <Header menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
  <Home/>
  <Work/>
  <Timeline/>
  <Services/>
  <Testimonial/>
  <Contact/>
  <Footer/>
  <Toaster/>

  </>
  );
}

export default App;
