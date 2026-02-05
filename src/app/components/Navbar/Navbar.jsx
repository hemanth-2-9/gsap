"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { navLinks } from "../constants/constants";
import Link from "next/link";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent", backgroundColor: "#00000050"  },
      { backgroundFilter: "blur(0px)", duration: 1, ease: "power.inOut" },
    );
  }, []);
  return (
    <nav>
      <div>
        {/* Logo / Home Link */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </Link>

        {/* Nav Links */}
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={`/${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
