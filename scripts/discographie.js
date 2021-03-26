const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
   effect: 'flip',
    autoplay: {
          delay: 1500,
          
        }
  })

  import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);






