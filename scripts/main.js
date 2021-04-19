let questions = [
    {
      q: "Quel est le premier album de Van Halen?",
      o1: "Van Halen",
      o2: "5150",
      
      r: 1
    },
    {
      q: "Quelle est la chanson la plus populaire de Van Halen?",
      o1: "Jump",
      o2: "Panama",
      o3: "Hot for teacher",
      04: "Amsterdam",
     
      r: 1
    },
   
    {
      q: "Quelle chanteuse s’est faite offrir le rôle de chanteuse dans le groupe Van Halen?",
      o1: "Joan Jett",
      o2: "Sass Jordan",
      o3: "Patty Smythe",
     
      r: 2
    },
    {
      q: "Quelle est le nom de la chanson instrumentale légendaire qui figure dans le premier album de Van Halen ?",
      o1: "YYZ",
      o2: "Eruption",
      o3: "Top gun",
     
      r: 2
    },
    {
      q: "Quel membre du groupe aime particulièrement le Jack Daniels?",
      o1: "Eddie Van Halen",
      o2: "Alex Van Halen",
      r: 2
    },
    {
      q: "La légendaire guitare ayant été utilisée par Eddie Van Halen sur le premier album est enterrée avec le guitariste de Pantera, Dimebag Darell.",
      o1: "Vrai",
      o2: "Faux",
      r: 1
    },
    {
      q: "En quelle année Eddie Van Halen est-il décédé?",
      o1: "2019",
      o2: "2020",
       o3: "2021",
      r: 2
    },
    {
      q: "Van Halen a eu 3 chanteurs.",
      o1: "Vrai",
      o2: "Faux",
      r: 1
    }
  ];
  
  var bodyquiz = document.querySelector(".body-quiz");

  console.log("Bonne réponse: pointage " + this.score);
  
  class Quiz {
    constructor(tableau) {
      this.index = 0;
      this.score = 0;
      this.questions = tableau;
      this.questions.forEach((question, value) => {
        this.creerHtml(question, value + 1);
      });
      this.setVisible(this.index);
      this.answers();
    }
    creerHtml(Q, value) {
      //div
      this.div = document.createElement("div");
      this.div.classList.add("question");
      bodyquiz.appendChild(this.div);
  
      //strong
      this.strong = document.createElement("strong");
      this.strong.innerText = Q.q;
      this.div.appendChild(this.strong);
  
      //br
      this.br = document.createElement("br");
      this.div.appendChild(this.br);
  
      //options
      if ("o1" in Q) {
        let radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", "question" + value);
        radio.setAttribute("value", "1");
        this.div.appendChild(radio);
  
        let label = document.createElement("label");
        label.innerText = Q.o1;
        this.div.appendChild(label);
  
        this.br = document.createElement("br");
        this.div.appendChild(this.br);
      }
  
      if ("o2" in Q) {
        let radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", "question" + value);
        radio.setAttribute("value", "2");
        this.div.appendChild(radio);
  
        let label = document.createElement("label");
        label.innerText = Q.o2;
        this.div.appendChild(label);
  
        this.br = document.createElement("br");
        this.div.appendChild(this.br);
      }
  
      if ("o3" in Q) {
        let radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", "question" + value);
        radio.setAttribute("value", "3");
        this.div.appendChild(radio);
  
        let label = document.createElement("label");
        label.innerText = Q.o3;
        this.div.appendChild(label);
  
        this.br = document.createElement("br");
        this.div.appendChild(this.br);
      }
  
      if ("o4" in Q) {
        let radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", "question" + value);
        radio.setAttribute("value", "4");
        this.div.appendChild(radio);
  
        let label = document.createElement("label");
        label.innerText = Q.o4;
        this.div.appendChild(label);
  
        this.br = document.createElement("br");
        this.div.appendChild(this.br);
      }
    }
    setVisible(number) {
      let divQ = document.querySelectorAll(".question");
      divQ.forEach((q) => {
        q.classList.remove("is-visible");
        divQ[number].classList.add("is-visible");
      });
    }
    answers() {
      let R = document.querySelectorAll("input[type = 'radio']");
      R.forEach((radio) => {
        radio.addEventListener("change", () => {
          if (radio.checked) {
            if (radio.value == this.questions[this.index].r) {
              this.score++;
              console.log("Bonne réponse: pointage " + this.score);
            } else {
              this.score--;
              if(this.score == -1) { this.score = 0 }
              console.log("Mauvaise réponse: pointage " + this.score);
            }
            if (this.index < this.questions.length) {
              this.index++;
              if(this.index == this.questions.length) {
                this.final();
              }
              this.setVisible(this.index);
            }
          }
        });
      });
    }
    final() {
      let global = document.createElement('div');
      global.innerText = 'Félicitation';
      bodyquiz.appendChild(global);
    }
  }
  
  new Quiz(questions);

  
  var play = document.querySelector('.btn');

play.addEventListener('click', () => {
  gsap.to('.fond', { 
    duration: 1.2,
    scale: 1,
    opacity: 1,
    rotationZ: 360,
    ease: "easing",
  });
    gsap.to('.fond', { 
    delay: 3,
    scale: 0,
    opacity: 0,
    rotationZ: -360
  });
  gsap.to('.face', { 
    duration: 1.2,
    scale: 1,
    opacity: 1,
    rotationZ: -360,
    ease: "bounce",
    delay: 0.5
  });
      gsap.to('.face', { 
    delay: 3,
    scale: 0,
    opacity: 0,
    rotationZ: 360
  });
    gsap.to('.texte', { 
    duration: 1.2,
    scale: 0.7,
    opacity: 1,
    ease: "elastic",
    delay: 1.2,
  });
    gsap.to('.texte', { 
    delay: 3,
    scale: 0,
    opacity: 0,
    onComplete: () => console.log("fini")
  });
  });