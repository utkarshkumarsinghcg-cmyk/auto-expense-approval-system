
const textList = [
  "Welcome to ExpenseFlow",
  "Automated Expense Management"
];

let i = 0, j = 0, isDeleting = false, speed = 80;

function typeEffect() {
  const element = document.querySelector(".typing-text");
  if (!element) return;
  const current = textList[i];

  if (!isDeleting) {
    element.innerHTML = current.slice(0, j++);
    if (j === current.length + 1) {
      isDeleting = true;
      speed = 100;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    element.innerHTML = current.slice(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % textList.length;
    }
  }
  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);


const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    
    localStorage.setItem("userName", username);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("isLoggedIn", "true");

   
    window.location.href = "home.html";
  });
}