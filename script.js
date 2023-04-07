let showQuestions = document.getElementById("show-questions");
let showOptions = document.getElementById("show-options");
let showResults = document.getElementById("show-result");
let prevBtn = document.getElementById("prev-btn");

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
// if (count === 0) {
// } else {
//     prevBtn.disabled = false;    
// }
function SortQuestions() {
    arrayCbt.forEach((cbt, index) => {
        if (index == count) {
            showQuestions.innerHTML = `
            <h1>${index+1+"."} ${cbt.question}</h1>            
            `              
        }
        cbt.options.map((pick, index2) => {
            if (index == count) {                
            console.log(pick);            
            showOptions.innerHTML += `
            <h5>
            <input name="answer" type="radio">
            <label for="answer">${pick}</label><br>
            </h5>
            `
            }
            
        })    
        
    })
}

SortQuestions();

function nextQuestion() {
    count++;
    SortQuestions();
}

function previousQuestion() {
    count--;
    SortQuestions();
}




       
                        
                   
        