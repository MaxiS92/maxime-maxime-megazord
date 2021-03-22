var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
});

gsap.registerPlugin(ScrollTrigger);

const sectionList = document.querySelectorAll(".section-accueil");
  sectionList.forEach((section) => { 
  const swiper= section.querySelector(".carousel-accueil-img");
  const video= section.querySelector(".rwd-video");
  const title = section.querySelector(".h1A");
  const card = section.querySelectorAll(".card");
                    
  gsap.timeline({
    scrollTrigger: section,
    markers: true,
    toggleActions: 'restart complete reverse',
  })
  .from(title, {
    opacity: 0,
    scale: '2',
  })
  .from(card, {
    y: '100px',
    duration: 1,
    opacity: 0,
  })
  .from(swiper, {
    x: '-200px',
    duration: 0.5,
    opacity: 0,
  })
  .from(video, {
    x: '200px',
    duration: 0.5,
    opacity: 0,
  })
})