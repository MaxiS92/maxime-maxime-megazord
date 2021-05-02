fetch('https://megazord-vanhalen.ca/json/')
.then(function(response) {
  return response.json();
})
.then(function(question){
  new Question(question);
})
.catch(function() {
  console.log('Une erreur est survenue')
})
  
  var quizBody = document.querySelector(".body-quiz");
  var bonQuiz = document.querySelector(".quiz-bon");
  var mauvaisQuiz = document.querySelector(".quiz-mauvais");
  
  
  
  class Question {
  
    constructor(table) {
      this.index = 0;
      this.score = 0;
      this.question = table;
      this.question.forEach((question, value) => {
        this.html(question, value + 1);
      });
  
      this.setVisible(this.index);
      this.reponse();
    }
    html(A, value) {
  
      this.div = document.createElement("div");
      this.div.classList.add("question");
      quizBody.appendChild(this.div);
  
      this.strong = document.createElement("strong");
      this.strong.innerText = A.q;
      this.div.appendChild(this.strong);
  
      this.br = document.createElement("br");
      this.div.appendChild(this.br);
  
      if ("o1" in A) {
  
        let radio1 = document.createElement("input");
        radio1.setAttribute("type", "radio");
        radio1.setAttribute("name", "question" + value);
        radio1.setAttribute("value", "1");
        this.div.appendChild(radio1);
  
        let label1 = document.createElement("label");
        label1.innerText = A.o1;
        this.div.appendChild(label1);
  
        this.br = document.createElement("br");
        this.div.appendChild(this.br);
      }
  
      if ("o2" in A) {
  
        let radio2 = document.createElement("input");
        radio2.setAttribute("type", "radio");
        radio2.setAttribute("name", "question" + value);
        radio2.setAttribute("value", "2");
        this.div.appendChild(radio2);
  
        let label2 = document.createElement("label");
        label2.innerText = A.o2;
        this.div.appendChild(label2);
  
        this.br = document.createElement("br");
        this.div.appendChild(this.br);
      }
  
      if ("o3" in A) {
  
        let radio3 = document.createElement("input");
        radio3.setAttribute("type", "radio");
        radio3.setAttribute("name", "question" + value);
        radio3.setAttribute("value", "3");
        this.div.appendChild(radio3);
  
        let label3 = document.createElement("label");
        label3.innerText = A.o3;
        this.div.appendChild(label3);
  
        this.br = document.createElement("br");
        this.div.appendChild(this.br);
      }
  
    }
  
    setVisible(nombre) {
  
      let divA = document.querySelectorAll(".question");
      divA.forEach((q) => {
        q.classList.remove("is-visible");
        divA[nombre].classList.add("is-visible");
      });
    }
  
    reponse() {
  
      let r = document.querySelectorAll("input[type = 'radio']");
      r.forEach((radio) => {
  
        radio.addEventListener("change", () => {
          console.log(this.index);
          if (radio.checked) {
            if (radio.value == this.question[this.index].r) {
              this.bonneReponse();
            } else {
              this.mauvaiseReponse();
              if (this.score == -1) { this.score = 0 }
            }
            if (this.index <= this.question.length - 1) {
              if(this.index == this.question.length - 1) {
                this.div.classList.add("last");
                this.div.innerText = 'Pointage:';
                this.strong.innerText = this.score + '/' + this.question.length;
                this.div.appendChild(this.br);
                this.div.appendChild(this.strong);
                this.quizTerminer()
                bonQuiz.remove();
                mauvaisQuiz.remove();
              }
              this.index++;
              this.setVisible(this.index);
            }
            else {
              this.quizTerminer()
              bonQuiz.remove();
              mauvaisQuiz.remove();
            }
          }
        });
      });
    }
  
    bonneReponse() {
      gsap.to('.fond1', { 
        duration: 1.2,
        scale: 1,
        opacity: 1,
        rotationZ: 360,
        ease: "easing",
      });
        gsap.to('.fond1', { 
        delay: 3,
        scale: 0,
        opacity: 0,
        rotationZ: -360
      });
      gsap.to('.face1', { 
        duration: 1.2,
        scale: 1,
        opacity: 1,
        rotationZ: -360,
        ease: "bounce",
        delay: 0.5
      });
          gsap.to('.face1', { 
        delay: 3,
        scale: 0,
        opacity: 0,
        rotationZ: 360
      });
        gsap.to('.texte1', { 
        duration: 1.2,
        scale: 0.7,
        opacity: 1,
        ease: "elastic",
        delay: 1.2,
      });
        gsap.to('.texte1', { 
        delay: 3,
        scale: 0,
        opacity: 0,
        onComplete: () => console.log("fini")
      });
        
        this.score++;
      
  }

  
    mauvaiseReponse() {
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
  
    }
    
    }
  
  
  

  
  var play = document.querySelector('.btn');

