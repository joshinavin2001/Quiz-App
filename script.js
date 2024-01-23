const qustions = [
  {
    Qus: "Which HTML element is used to define description data ?",
    a: "li",
    b: "ol",
    c: "dd",
    d: "dl",
    correct: "c",
  },
  {
    Qus: "What tag is used to render an image on a webpage ?",
    a: "img",
    b: "src",
    c: "image",
    d: "None of above",
    correct: "a",
  },
  {
    Qus: "Which property is used to set colors in HTML ?",
    a: "Color",
    b: "background-color",
    c: "font-color",
    d: "text-color",
    correct: "a",
  },
  {
    Qus: "Which property is used to set border colors in HTML ?",
    a: "border-color",
    b: "border",
    c: "both a and b",
    d: "none of the above",
    correct: "b",
  },
  {
    Qus: "Which HTML tag is called the root element of an HTML document ?",
    a: "head",
    b: "body",
    c: "title",
    d: "html",
    correct: "d",
  },
  {
    Qus: "Which of the following tags is used to add a row to a table in HTML ?",
    a: "tr",
    b: "td",
    c: "th",
    d: "<none of the above>",
    correct: "a",
  },
  {
    Qus: "What is the select tag used for ?",
    a: "create a combo box",
    b: "select some attributes and change their style",
    c: "change text font",
    d: "none of the above",
    correct: "a",
  },
  {
    Qus: "HTML file are saved by default with the extension ?",
    a: ".ht",
    b: ".h",
    c: ".html",
    d: "none of the above",
    correct: "c",
  },
  {
    Qus: "How to create an ordered lists in HTML ?",
    a: "Named,Unnamed Lists",
    b: "Ordered,Unordered Lists",
    c: "bullet,numbered Lists",
    d: "none of the above",
    correct: "b",
  },
  {
    Qus: "What is the smallest header in HTML by default ?",
    a: "h1",
    b: "h3",
    c: "h4",
    d: "h6",
    correct: "d",
  },
  
];
let index = 0;
let total=qustions.length;
let right=0,wrong=0;
let qusBox = document.getElementById("QusBox");
let opts=document.querySelectorAll(".options")
const LoadQustion = () => {
  if(index===total){
    endQuiz();
    rightwrong.style.display="block"
    setTimeout(function(){
      rightwrong.style.display="none"
    },2000)
    
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
    daba.innerHTML=`<h1>Correct</h1>`
  }else{
    wrong++;
    daba.innerHTML=`<h1>Wrong</h1>`
  }
  index++;
  LoadQustion()
  reset()
  istrue()
  boxreset()

 
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
  setTimeout(function(){
    document.getElementById("box").innerHTML=`<h1 class="end">ThankYou The Quiz Game Is End</h1>
    <h2 class="correct">${
     right
    }/${total} Are Correct </h2>`
    
  },2000)
  
}


let rightwrong = document.querySelector(".rightwrong");
let daba = document.querySelector(".daba");
const istrue=()=>{
  rightwrong.style.display="block"

}
const boxreset=()=>{
  setTimeout(function(){
    
    rightwrong.style.display="none"
    
  },1000)

}