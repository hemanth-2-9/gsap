import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cocktails from "./components/Cocktails/Cocktails";
import About from './components/About/About';
import Art from './components/Art/Art'

gsap.registerPlugin(ScrollTrigger, SplitText);

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </div>
  )
}

export default page
