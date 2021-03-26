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
    scrollTrigger: {
    markers: true,
    start: 'top 75%',
    end: 'bottom 25%',
    toggleActions: 'restart complete reverse reset',
    trigger: section,
    },
  })

  .from(title, {
    opacity: 0,
    scale: '2',
  })
  .from(swiper, {
    y: '-100px',
    opacity: 0,
  })
  .from(video, {
    y: '100px',
    opacity: 0,
  })
  .from(card, {
    y: '100px',
    duration: 1,
    opacity: 0,
  })
})