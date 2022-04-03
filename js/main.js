let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnThree = document.getElementById("btnThree");
let resultOne = document.getElementById("resultOne");
let back = document.getElementById("back");
let submit = document.getElementById("submit");
let goBack = document.getElementById("go-back");
let ahead = document.getElementById("ahead");
let numTwo = document.querySelector(".num__two");
let numThree = document.querySelector(".num__three");
let titleTwo = document.querySelector(".title__two");
let titleThree = document.querySelector(".title__three");
let resultText = document.getElementById("result-text");
let resultTitle = document.getElementById("title");

let count = 1;
btnOne.addEventListener("click", () =>{
  resultTitle.textContent = `Choose Title content`;
  resultTitle.style.display = "block";
  resultOne.style.display = "block";
  goBack.style.display = "none";
  ahead.style.display = "none";
  back.style.display = "none";
  submit.style.display = "none";
  numTwo.classList.remove("active");
  titleTwo.classList.remove("actives");
  numThree.classList.remove("active");
  titleThree.classList.remove("actives");
  resultText.style.display = "none";
  count = 2;
});
back.addEventListener("click", () =>{
  resultTitle.textContent = `Choose Title content`;
  resultTitle.style.display = "block";
  resultOne.style.display = "block";
  goBack.style.display = "none";
  ahead.style.display = "none";
  back.style.display = "none";
  submit.style.display = "none";
  numTwo.classList.remove("active");
  titleTwo.classList.remove("actives");
  numThree.classList.remove("active");
  titleThree.classList.remove("actives");
  resultText.style.display = "none";
});

btnTwo.addEventListener("click", () =>{
  resultTitle.textContent = `Choose Description Content`;
  resultTitle.style.display = "block";
  numTwo.classList.add("active");
  titleTwo.classList.add("actives");
  resultOne.style.display = "none";
  back.style.display = "block";
  submit.style.display = "block";
  goBack.style.display = "none";
  ahead.style.display = "none";
  numThree.classList.remove("active");
  titleThree.classList.remove("actives");
  resultText.style.display = "none";
  count = 3;
});

resultOne.addEventListener("click", () =>{
  resultTitle.textContent = `Choose Description Content`;
  resultTitle.style.display = "block";
  numTwo.classList.add("active");
  titleTwo.classList.add("actives");
  resultOne.style.display = "none";
  back.style.display = "block";
  submit.style.display = "block";
  goBack.style.display = "none";
  ahead.style.display = "none";
  numThree.classList.remove("active");
  titleThree.classList.remove("actives");
  resultText.style.display = "none";
});

goBack.addEventListener("click", () =>{
  resultTitle.textContent = `Choose Description Content`;
  resultTitle.style.display = "block";
  numTwo.classList.add("active");
  titleTwo.classList.add("actives");
  resultOne.style.display = "none";
  back.style.display = "block";
  submit.style.display = "block";
  goBack.style.display = "none";
  ahead.style.display = "none";
  numThree.classList.remove("active");
  titleThree.classList.remove("actives");
  resultText.style.display = "none";
});

btnThree.addEventListener("click", () =>{
  if(count == 3){
    resultTitle.textContent = `Are You Happy?`;
    resultTitle.style.display = "block";
    numThree.classList.add("active");
    titleThree.classList.add("actives");
    resultOne.style.display = "none";
    back.style.display = "none";
    submit.style.display = "none";
    goBack.style.display = "block";
    ahead.style.display = "block";
    resultText.style.display = "none";
  } else {
    alert("Sorry ! You don't move next");
  }
});

submit.addEventListener("click", () =>{
  resultTitle.textContent = `Are You Happy?`;
  resultTitle.style.display = "block";
  numThree.classList.add("active");
  titleThree.classList.add("actives");
  resultOne.style.display = "none";
  back.style.display = "none";
  submit.style.display = "none";
  goBack.style.display = "block";
  ahead.style.display = "block";
  resultText.style.display = "none";
});

ahead.addEventListener("click", () =>{
  resultText.style.display = "block";
  resultTitle.style.display = "none";
  goBack.style.display = "none";
  ahead.style.display = "none";
  back.style.display = "none";
  submit.style.display = "none";
  resultOne.style.display = "none";
});

