/*
let anwser = Number(prompt("What is -2*2*-2*-2*2*-2*2*-2*-2*2*2*-900?"));
if(anwser < 100) {
console.log("anwser is less then 100");
}
else if(anwser >= 100 && anwser < 200) {
console.log("anwser is less then 200 but greater then or equal to 100");
}
*/


function checkQuiz() {
	let addition = document.getElementsByName("addition");
	let subtraction = document.getElementsByName("subtraction");
	let multiplication = document.getElementsByName("multiplication");
	let division = document.getElementsByName("division");
let percentCorrect = 0;
let numberCorrect = 0;

for (let i = 0; i < addition.length; i++) {
    if (addition[i].checked && addition[i].value == "1") {
        percentCorrect = percentCorrect + 25;
        numberCorrect = numberCorrect + 1;
        break;
    }
}

for (let i = 0; i < subtraction.length; i++) {
    if (subtraction[i].checked && subtraction[i].value == "4") {
        percentCorrect = percentCorrect + 25;
        numberCorrect = numberCorrect + 1;
        break;
    }
}

for (let i = 0; i < multiplication.length; i++) {
    if (multiplication[i].checked && multiplication[i].value == "4") {
        percentCorrect = percentCorrect + 25;
        numberCorrect = numberCorrect + 1;
        break;

   }
}

for (let i = 0; i <division.length; i++) {
    if (division[i].checked && division[i].value == "1") {
        percentCorrect = percentCorrect + 25;
        numberCorrect = numberCorrect + 1;
        break;

   }
}

alert("Percentage Correct : "+percentCorrect + " - Number Questions Correct : " + numberCorrect);

let anwser = Number(prompt("What is -2*2*-2*-2*2*-2*2*-2*-2*2*2*-900?"));
alert(anwser);
if(anwser < 100) {
alert("anwser is less then 100");
}
else if(anwser >= 100 && anwser < 200) {
alert("anwser is less then 200 but greater then or equal to 100");
} else {
	alert('answer is wrong');
}

}
