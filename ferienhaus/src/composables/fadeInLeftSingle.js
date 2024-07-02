
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function useFadeInLeft(el) {

    	gsap.from(
		el,

		{
			scrollTrigger: el,
			duration: 4,
			x: "-100%",
			delay: 0.2,
			ease: "back",
		}
	);

}
