import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cocktails from "./components/Cocktails/Cocktails";
import About from './components/About/About';
import Art from './components/Art/Art'
import Menu from './components/Menu/Menu'
import Contact from './components/Contact/Contact'

gsap.registerPlugin(ScrollTrigger, SplitText);

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </div>
  )
}

export default page
