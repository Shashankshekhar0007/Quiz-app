const questions = [
  {
    question: "Which is the smallest jeev?",
    answers: [
      { text: "PPM", correct: false },
      { text: "PPMO", correct: false },
      { text: "Ant", correct: false },
      { text: "Antman", correct: true },
    ],
  },
  {
    question: "Biggest mammal on earth?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Dinosaur", correct: false },
      { text: "Shark", correct: false },
      { text: "Whale", correct: true },
    ],
  },
  {
    question: "Full-form of IPFS?",
    answers: [
      { text: "Internet Provided file system", correct: false },
      { text: "Inter-planetary file system", correct: true },
      { text: "Imf provided funds and services", correct: false },
      { text: "Intranet Provided file system", correct: false },
    ],
  },
  {
    question: "What is the current size of Indian stock market?",
    answers: [
      { text: "2.5 trillion", correct: false },
      { text: "3.6 trillion", correct: false },
      { text: "approx 6 trillion", correct: false },
      { text: "approx 4 trillion", correct: true }
    ],
  },
  {
    question: "Why south koreans hate indians?",
    answers: [
      { text: "Border Disputes", correct: false },
      { text: "they don't follow rules", correct: false },
      { text: "they have muddy skin", correct: true },
      { text: "Beauty standards", correct: false },
    ],
  },
];

const questionelement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");
let currentquestionindex = 0;
let score = 0;
function startquiz() {
  resetstate();
  currentquestionindex = 0;
  score = 0;
  nextbutton.innerHTML = "Next";
  showquestion();
 console.log(nextbutton);
}

function showquestion() {
    resetstate();
  let currentquestion = questions[currentquestionindex];
  let questionNo = currentquestionindex + 1;
  questionelement.innerHTML = questionNo + "." + currentquestion.question;
  currentquestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbuttons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectanswer);
  });
}

function resetstate() {
  nextbutton.style.display = "none";
  while (answerbuttons.firstChild) {
    answerbuttons.removeChild(answerbuttons.firstChild);
  }
}

function selectanswer(e) {
  const selectedbtn = e.target;
  const iscorrect = selectedbtn.dataset.correct === "true";
  if (iscorrect) {
    selectedbtn.classList.add("correct");
    score++;
  } else {
    selectedbtn.classList.add("incorrect");
  }
  Array.from(answerbuttons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextbutton.style.display = "block";
  //console.log("no error");
}

function showscore() {
    resetstate();
    questionelement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML = "Play again";
    nextbutton.style.display = "block";
}
function handleNextButton() {
    //console.log("button clicked");
    currentquestionindex++;
    if (currentquestionindex < questions.length) {
        showquestion();
  }
   else {
    showscore();
  }
}
nextbutton.addEventListener("click", () => {
  if (currentquestionindex < questions.length) {
    handleNextButton();
  } else {
    startquiz();
  }
});
startquiz();