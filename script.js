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
let total=qustions.length;
let right=0,wrong=0;
let qusBox = document.getElementById("QusBox");
let opts=document.querySelectorAll(".options")
const LoadQustion = () => {
  if(index===total){
    return endQuiz();
}
  let data = qustions[index];
  qusBox.innerText = `${index+1})${data.Qus}`;
  opts[0].nextElementSibling.innerHTML=data.a
  opts[1].nextElementSibling.innerHTML=data.b
  opts[2].nextElementSibling.innerHTML=data.c
  opts[3].nextElementSibling.innerHTML=data.d
};
//this is intial call//
LoadQustion();


//submit logic //
const submitQuiz=()=>{
  let data = qustions[index];
  const ans = getans()
  if(ans===data.correct){
    right++;
  }else{
    wrong++;
  }
  index++;
  LoadQustion()
  reset()
 
  return;
}
const getans=()=>{
  let answr;
  opts.forEach((input)=>{
     if(input.checked){
      answr= input.value
     }
  })
  return answr;
}
//reset//
const reset=()=>{
  opts.forEach((input)=>{
       input.checked=false;
  })
}
//end quiz//
const endQuiz =()=>{
   document.getElementById("box").innerHTML=`<h1 class="end">ThankYou The Quiz Game Is End</h1>
   <h2 class="correct">${
    right
   }/${total} Are Correct </h2>`
   
}