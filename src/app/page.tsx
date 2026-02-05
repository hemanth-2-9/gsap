import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function page() {
  return (
    <div className="text-4xl flex-center">
         helloo
    </div>
  )
}

export default page
