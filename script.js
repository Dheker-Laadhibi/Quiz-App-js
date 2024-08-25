
//set questions  in an array of objects 
const questions=[
    {
question :'what  is .html',
   // Array of answer objects where each answer contains text and correct status
answers:[

{text:'extension' , correct:true},
{text:'file',correct:false},
{text:'language',correct:false},
{text:'other',correct:false}


]
    },
    {
        question: 'What does CSS stand for?',
        answers: [
          { text: 'Cascading Style Sheets', correct: true },
          { text: 'Computer Style Sheets', correct: false },
          { text: 'Creative Style Sheets', correct: false },
          { text: 'Colorful Style Sheets', correct: false }
        ]
      },
      {
        question: 'What is the correct syntax for referring to an external script called "script.js"?',
        answers: [
          { text: '<script src="script.js">', correct: true },
          { text: '<script href="script.js">', correct: false },
          { text: '<script ref="script.js">', correct: false },
          { text: '<script name="script.js">', correct: false }
        ]
      },
      {
        question: 'Which property is used to change the background color in CSS?',
        answers: [
          { text: 'background-color', correct: true },
          { text: 'color', correct: false },
          { text: 'bgcolor', correct: false },
          { text: 'background', correct: false }
        ]
      }

];


const question= document.getElementById("question");
const answerButton= document.getElementById("answer-buttons");
const next= document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;



function startQuiz(){
     currentQuestionIndex=0;
     score=0 
     //cause in other cases it could be restart Quiz 
     next.innerHTML='Next';
     showQuestions();
}

function showQuestions(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    //to know the real number of question cause they all start from 0
    let questionNo= currentQuestionIndex+1;
    console.log(questionNo+" quesNo");
    
    question.innerHTML= questionNo+"."+currentQuestion.question;
    currentQuestion.answers.forEach(answer =>{
const button= document.createElement("button");
button.innerHTML= answer.text;

// will add the classname btn to  the button 

button.classList.add("btn");
answerButton.appendChild(button);
if(answer.correct){
    //dataset is an object that contains all the data-* attributes of an element 
    /*The dataset object allows you to work with the data-*
     attributes without having to use the getAttribute or setAttribute methods.*/ 
    button.dataset.correct=answer.correct;
}
button.addEventListener("click",selectAnswer)
console.log("questionElement",+question);


    });
}
//to pass to the next q 
function resetState(){
     // Hide the "Next" button when preparing for a new question which is only shown after the user selects an answer
    next.style.display="none";
    // Remove all existing answer buttons from the answerButton container
while(answerButton.firstChild){
answerButton.removeChild(answerButton.firstChild)


}

}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
      score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

Array.from(answerButton.children).forEach(button =>{
if(button.dataset.correct==="true"){

    button.classList.add("correct");
}
//disable the button to be clicked
button.disabled=true;



});
//display the next button
next.style.display="block"


}


 function showScore(){
resetState();
question0.innerHTML=`your score is :${score} out of ${questions.length}!`;
next.innerHTML='play Again';
//display the next button
next.style.display="block"
}

function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex<questions.length){
  showQuestions();
}else{
  showScore()
}
}
next.addEventListener("click",()=>
{
  if(currentQuestionIndex<questions.length){
    handleNextButton()
  }else{
    startQuiz()
  }
})




startQuiz();