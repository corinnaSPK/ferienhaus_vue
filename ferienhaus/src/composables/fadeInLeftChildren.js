
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function 
usefadeInLeftChildren(target) {
	gsap.from(target.children,
  {
    scrollTrigger: target,
    x: "-100%",
    ease: "back.out(1.5)",
    opacity: 0,
    duration: 1.2,
    stagger: .1,
  }
);
}