import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </div>
  )
}

export default page
