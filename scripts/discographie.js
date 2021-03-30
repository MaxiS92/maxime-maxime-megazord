const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
   effect: 'flip',
    autoplay: {
          delay: 1500,
          
        }
  })

  gsap.registerPlugin(ScrollTrigger);

const sectionList = document.querySelectorAll(".ScrollTrigger, .disco-section");
  sectionList.forEach((section) => { 
  const photo= section.querySelector(".photo");
  const ol = section.querySelector(".ol");
  const video = section.querySelector(".video");
  const card = section.querySelectorAll(".card");
                    
  gsap.timeline({
    scrollTrigger: {
    markers: false,
    toggleActions: 'restart complete reverse reset',
    trigger: section,
    
    },
  })

  .from(video, {
    opacity: 0,
    scale: '2',
  })
  .from(photo, {
    y: '-100px',
    opacity: 0,
  })
  .from(ol, {
    y: '100px',
    opacity: 0,
  })
  .from(card, {
    y: '100px',
    duration: 1,
    opacity: 0,
  })
})

let timeout;
let body = document.body;

gsap.to('.grossecaisse', {
  scrollTrigger: {
    start: 'top 50%' ,
    end: 'bottom 50%' ,
    scrub: true,
    trigger: '.grossecaisse',
    pin: true,

    onUpdate: (e) => {
      body.classList.add('scrollup');
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        body.classList.remove('scrollup');
        body.classList.remove('scrolldown');
      }, 0)

      if(e.direction == 1) {
        body.classList.add('scrolldown');
        body.classList.remove('scrollup');
      } 
      if(e.direction == -1) {
        body.classList.add('scrollup');
        body.classList.remove('scrolldown');
      }
    }
  }
})