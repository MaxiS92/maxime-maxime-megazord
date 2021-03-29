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
  const card1 = section.querySelector(".card1");
  const card2 = section.querySelector(".card2");
  const card3 = section.querySelector(".card3");
  const card4 = section.querySelector(".card4");
                    
  gsap.timeline({
    scrollTrigger: {
    markers: false,
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
  .from(card1, {
    y: '100px',
    duration: 1,
    opacity: 0,
  })
  .from(card2, {
    y: '100px',
    duration: 1,
    opacity: 0,
  })
  .from(card3, {
    y: '100px',
    duration: 1,
    opacity: 0,
  })
  .from(card4, {
    y: '100px',
    duration: 1,
    opacity: 0,
  })
})