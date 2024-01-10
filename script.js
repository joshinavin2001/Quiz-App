const qustions = [
  {
    Qus: "Which of the following is a markup language ?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    Qus: "What Year was JavaScript Launched ?",
    a: "1966",
    b: "1995",
    c: "1994",
    d: "1992",
    correct: "b",
  },
  {
    Qus: "What does CSS Stand For ?",
    a: "casual style sheet",
    b: "cascadc style sheet",
    c: "Cascading style sheet",
    d: "none of the above",
    correct: "c",
  },
];
let index = 0;
const questionbox = document.getElementById("QusBox");
const qusInput = document.querySelectorAll(".options");
const LoadQustion = () => {
  const data = qustions[index];
  questionbox.innerText = `${index + 1}) ${data.Qus}`;
  qusInput[0].nextElementSibling.innerText = data.a;
  qusInput[1].nextElementSibling.innerText = data.b;
  qusInput[2].nextElementSibling.innerText = data.c;
  qusInput[3].nextElementSibling.innerText = data.d;
};
LoadQustion();
