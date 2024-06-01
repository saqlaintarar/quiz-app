const questions=[
    {
    question:"which is not a programing language?",
    option:["js","html","python"],
    answer:"html"
    },
    {
        question:"which is most popular language?",
        option:["html","js","python"],
        answer:"js"
    },
    {
        question:"which is not a framework of js?",
        option:["angular","vue","react"],
        answer:"react"
    },
    {
        question: "Which of the following is a JavaScript library for building user interfaces?",
        option: ["React", "Laravel", "Django"],
        answer: "React"
    },
    {
        question: "Which CSS property is used to change the background color?",
        option: ["color", "background-color", "bgcolor"],
        answer: "background-color"
    }
];
let question_number=0;
let correct=0;
document.addEventListener("DOMContentLoaded",()=>{
    load_question(question_number);
});
function load_question(question_number){
document.querySelector("#question").innerHTML=questions[question_number].question
const options=document.querySelector("#options");
options.innerHTML="";
for(const option of questions[question_number].option) {
    options.innerHTML+=`<button class="option">${option}</button>`
}
document.querySelectorAll(".option").forEach(option=>{
    option.onclick=()=>{
        if (option.innerText === questions[question_number].answer) {
            correct++;
            document.querySelector("#correct").innerHTML = `Correct answers: ${correct}`;
        }

        // Move to the next question
        question_number++;

        // Check if there are more questions
        if (question_number < questions.length) {
            load_question(question_number);
        } else {
            // Display final result
            document.querySelector("#question").innerHTML = "Quiz finished!";
            options.innerHTML = "";
            document.querySelector("#correct").innerHTML = `Final score: ${correct}`;
        }

}
})
}