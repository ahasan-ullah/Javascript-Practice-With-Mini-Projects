const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false }
    ]
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Madrid", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false }
    ]
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false }
    ]
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false }
    ]
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Gold", correct: false },
      { text: "Silver", correct: false },
      { text: "Iron", correct: false }
    ]
  },
  {
    question: "What is the fastest land animal?",
    answers: [
      { text: "Cheetah", correct: true },
      { text: "Lion", correct: false },
      { text: "Horse", correct: false },
      { text: "Leopard", correct: false }
    ]
  },
  {
    question: "Which ocean is the largest?",
    answers: [
      { text: "Atlantic", correct: false },
      { text: "Pacific", correct: true },
      { text: "Indian", correct: false },
      { text: "Arctic", correct: false }
    ]
  },
  {
    question: "How many continents are there in the world?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false }
    ]
  },
  {
    question: "What is the square root of 64?",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "7", correct: false },
      { text: "9", correct: false }
    ]
  },
  {
    question: "Which language is used to create web pages?",
    answers: [
      { text: "HTML", correct: true },
      { text: "C++", correct: false },
      { text: "Python", correct: false },
      { text: "Java", correct: false }
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Vincent van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Michelangelo", correct: false }
    ]
  },
  {
    question: "What is the boiling point of water?",
    answers: [
      { text: "90°C", correct: false },
      { text: "100°C", correct: true },
      { text: "110°C", correct: false },
      { text: "95°C", correct: false }
    ]
  },
  {
    question: "Which country is famous for the Eiffel Tower?",
    answers: [
      { text: "Italy", correct: false },
      { text: "France", correct: true },
      { text: "Germany", correct: false },
      { text: "Spain", correct: false }
    ]
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Yen", correct: true },
      { text: "Won", correct: false },
      { text: "Dollar", correct: false },
      { text: "Rupee", correct: false }
    ]
  },
  {
    question: "What is H2O commonly known as?",
    answers: [
      { text: "Salt", correct: false },
      { text: "Water", correct: true },
      { text: "Hydrogen", correct: false },
      { text: "Oxygen", correct: false }
    ]
  },
  {
    question: "Which bird is known for its colorful tail?",
    answers: [
      { text: "Peacock", correct: true },
      { text: "Crow", correct: false },
      { text: "Pigeon", correct: false },
      { text: "Sparrow", correct: false }
    ]
  },
  {
    question: "What is the main source of energy for the Earth?",
    answers: [
      { text: "Wind", correct: false },
      { text: "Water", correct: false },
      { text: "Sun", correct: true },
      { text: "Coal", correct: false }
    ]
  },
  {
    question: "Which device is used to measure temperature?",
    answers: [
      { text: "Barometer", correct: false },
      { text: "Thermometer", correct: true },
      { text: "Hygrometer", correct: false },
      { text: "Altimeter", correct: false }
    ]
  },
  {
    question: "How many days are there in a leap year?",
    answers: [
      { text: "365", correct: false },
      { text: "366", correct: true },
      { text: "364", correct: false },
      { text: "367", correct: false }
    ]
  }
];

const questionElement=document.getElementById('question');
const answerButton=document.getElementById('answer-buttons');
const nextButton=document.getElementById('next-btn');

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML='Next';
  showQuestion();
}

function showQuestion(){
  resetState();

  let currentQuestion=questions[currentQuestionIndex];
  let questionNo=currentQuestionIndex+1;
  questionElement.innerHTML=questionNo+'. '+currentQuestion.question;

  currentQuestion.answers.forEach(answer=>{
    const button=document.createElement('button');
    button.innerHTML=answer.text;
    button.classList.add('btn');
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct=answer.correct;
    }
    button.addEventListener('click',selectAnswer);
  })
}

function resetState(){
  nextButton.style.display='none';
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn=e.target;
  const isCorrect=selectedBtn.dataset.correct==='true';
  if(isCorrect){
    selectedBtn.classList.add('correct');
    score++;
  }else{
    selectedBtn.classList.add('incorrect')
  }
  Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct==='true'){
      button.classList.add('correct');
    }
    button.disabled=true;
  })
  nextButton.style.display='block';
}

function showScore(){
  resetState();
  questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML='Play Again';
  nextButton.style.display='block';;
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}

nextButton.addEventListener('click',()=>{
  if(currentQuestionIndex<questions.length){
    handleNextButton();
  }
  else{
    startQuiz();
  }
})

startQuiz();