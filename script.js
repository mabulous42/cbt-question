let showQuestions = document.getElementById("show-questions");
let showOptions = document.getElementById("show-options");
let showResults = document.getElementById("show-result");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById('next-btn');
let submitBtn = document.getElementById('submit-btn');

submitBtn.style.display = 'none';

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
        answers: "Herbert Macauly"
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
let track = 0;

function SortQuestions() {

    showQuestions.innerHTML = `
        <h1>${count + 1 + "."} ${arrayCbt[count].question}</h1>           
        ` 
        for (let index = 0; index < arrayCbt[count].options.length; index++) {
            showOptions.innerHTML += `
            <h5>
            <input name="answer" type="radio">
            <label for="answer">${arrayCbt[count].options[index]}</label>
            </h5>
            `
            
        } 
        
        if (count == 0) {
            prevBtn.style.visibility = 'hidden';
        } else {
            prevBtn.style.visibility = 'visible';
        }

        if (count == arrayCbt.length-1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'block';            
        } else {
            nextBtn.style.display = 'block';
            submitBtn.style.display = 'none';            
        }


}

SortQuestions();

function nextQuestion() {
    showOptions.innerHTML = "";
    count++;
    SortQuestions();
}

function previousQuestion() {
    showOptions.innerHTML = "";
    count--;
    SortQuestions();
}







