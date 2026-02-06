import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cocktails from "./components/Cocktails/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cocktails />
    </div>
  )
}

export default page
