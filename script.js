let showQuestions = document.getElementById("show-questions");
let showOptions = document.getElementById("show-options");
let showResults = document.getElementById("show-result");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById('next-btn');
let submitBtn = document.getElementById('submit-btn');
let myOptions = document.getElementById('my-options');

submitBtn.style.display = 'none';

// function show(){   
//     selectedOption = document.querySelector('input[name = option]:checked').value;
//     console.log(selectedOption);
// }

let arrayCbt = [
    {
        question: "Who formed the first political party in Nigeria?",
        options: ["Olusegun Obasanjo", "Muhammadu Buhari", "Herbert Macauly", "Agbani Darego"],
        answers: "Herbert Macauly"
    },
    {
        question: "What is the name of Machester United Coach?",
        options: ["Eddie Howe", "Frank Lampard", "Mikel Arteta", "Erik Ten Hag"],
        answers: "Erik Ten Hag"
    },
    {
        question: "What is the first political party in Nigeria?",
        options: ["APC", "PDP", "NNDP", "AD"],
        answers: "NNDP"
    },
    {
        question: "Who is the current president of Nigeria?",
        options: ["Muhammadu Buhari", "Bukola Saraki", "Goodluck Jonathan", "Olusegun Obasanjo"],
        answers: "Muhammadu Buhari"
    },
    {
        question: "What does the eagle in the Nigeria coat of arm represent?",
        options: ["Peace", "Terror", "Agriculture", "Strength"],
        answers: "Strength"
    }
];
let count = 0;

function SortQuestions() {

    arrayCbt.forEach((quiz, index) => {
        if (index === count) {
            index = count;
            showQuestions.innerHTML = `
            <h1>${index + 1 + "."} ${quiz.question}</h1>           
            `
        }
    })

    for (let index = 0; index < arrayCbt[count].options.length; index++) {
        showOptions.innerHTML += `
        <h5>
        <input onclick="getAnswer()" name="option" id="my-options" type="radio" value="${arrayCbt[count].options[index]}">
        <label for="option">${arrayCbt[count].options[index]}</label>
        </h5>
        `
    }


    if (count == 0) {
        prevBtn.style.visibility = 'hidden';
    } else {
        prevBtn.style.visibility = 'visible';
    }

    if (count == arrayCbt.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }


}

let selectedOption = '';
function getAnswer() {
    selectedOption = document.querySelector('input[name = option]:checked').value;
    // console.log(selectedOption);
    selectedOption.checked;
}

let choice = [];





SortQuestions();

function nextQuestion(event) {
    event.preventDefault();
    showOptions.innerHTML = "";
    if (choice[count] === "") {
        choice.push(selectedOption); 
        quizResult();       
    } else {
        choice.splice(count,1,selectedOption);
        quizResult();       
    }
    console.log(choice);
    count++;
    SortQuestions();

}

function previousQuestion() {
    showOptions.innerHTML = "";
    count--;
    SortQuestions();
}

function submitQuestion() {
    prevBtn.style.visibility = "hidden";
    if (choice[count] === "") {
        choice.push(selectedOption); 
        quizResult();       
    } else {
        choice.splice(count,1,selectedOption);
        quizResult();       
    }
    console.log(choice);
    console.log("You Score " + score + " out of " + arrayCbt.length);
    
}

let score = 0;
function quizResult() {
    if (choice[count] === arrayCbt[count].answers) {
        score = score + 1;
    } else {
        score = score + 0;
    }
    // console.log("You Score " + score + " out of " + arrayCbt.length);
}







