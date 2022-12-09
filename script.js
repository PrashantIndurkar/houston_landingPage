let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");

let next1 = document.getElementById("next1");
let back1 = document.getElementById("back1");
let back2 = document.getElementById("back2");
let next2 = document.getElementById("next2");
let submit = document.getElementById("submit");

let steps = document.getElementById("steps");

let progressBar = document.getElementById("progressBar");
let progressBarValue = document.getElementById("progressBarValue");

next1.onclick = function () {
  console.log("next1");
  form1.style.display = "none";
  form2.style.display = "inline-block";
  form3.style.display = "none";
  progressBar.style.width = "50%";
  progressBarValue.innerHTML = "50%";
  steps.innerHTML = "2";
};

next2.onclick = function () {
  console.log("next2");
  form1.style.display = "none";
  form2.style.display = "none";
  form3.style.display = "inline-block";
  progressBar.style.width = "75%";
  progressBarValue.innerHTML = "75%";
  steps.innerHTML = "3";
};

submit.onclick = function () {
  console.log("submit");
  progressBar.style.width = "100%";
  progressBarValue.innerHTML = "100%";
  alert("out of Service");
};

back1.onclick = function () {
  console.log("back1");
  form1.style.display = "inline-block";
  form2.style.display = "none";
  form3.style.display = "none";
};
back2.onclick = function () {
  console.log("back2");
  form1.style.display = "none";
  form2.style.display = "inline-block";
  form3.style.display = "none";
};
