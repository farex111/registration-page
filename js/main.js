// burger menu
var burgerButton = document.querySelector(".burger");
var burgerMenu = document.querySelector(".burger-menu");

burgerButton.addEventListener("click", function () {
  burgerMenu.classList.toggle("burger-show");
});

// dropdown selection
const customSelect = document.querySelectorAll(".custom-select");

for (let i = 0; i < customSelect.length; i++) {
  const element = customSelect[i];
  const hidden = element.querySelector('input[type="hidden"]');
  const pTag = element.querySelector(".select");
  const pTagSpan = pTag.querySelector(".txt");
  const opt = element.querySelector(".options");
  const lists = opt.querySelectorAll("#option_region li");
  const lists1 = opt.querySelectorAll("#option_position li")
  pTag.addEventListener("click", function(){
    opt.classList.toggle("show");
  })

  for (let s = 0; s < lists.length; s++) {
    const list = lists[s];
    list.addEventListener("click", function(){
      pTagSpan.innerText = list.innerText;
      resultRegion.innerHTML = pTagSpan.innerText; // for popUp
      opt.classList.toggle("show");
      hidden.setAttribute("value", list.getAttribute("data-id"))
    });
  }
  for (let q = 0; q < lists1.length; q++) {
    const list1 = lists1[q];
    list1.addEventListener("click", function(){
      pTagSpan.innerText = list1.innerText;
      resultPosition.innerHTML = pTagSpan.innerText;  // for popUp
      opt.classList.toggle("show");
      hidden.setAttribute("value", list.getAttribute("data-id"))
    })
    
  }
}
// passwords show
var password = document.querySelectorAll(".passw");
var icons = document.querySelectorAll(".bi");

for (let s = 0; s < password.length; s++) {
  const pas = password[s];
  icons[s].addEventListener("click", function(){
    if(icons[s].classList[1] == "bi-eye-slash"){
      icons[s].classList.replace("bi-eye-slash", "bi-eye");
      pas.setAttribute('type', 'text')
    } else {
      icons[s].classList.replace("bi-eye", "bi-eye-slash");
      pas.setAttribute('type', 'password')
    }
  });
}
// password validate
var check = function() {
  var input = document.getElementById("pass");
  var lowerCaseLetters = /[a-z]/;
  var upperCaseLetters = /[A-Z]/;
  var numbers = /[0-9]/;
  
  if (input.value == document.getElementById('pass1').value && input.value.length >= 6 && input.value.match(upperCaseLetters) 
    && input.value.match(lowerCaseLetters) && input.value.match(numbers)) {
    document.getElementById('pass1').style.borderColor = "#7279FF";
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'პაროლი სწორია';
    input.style.borderColor = "#7279FF"
  } else {
    document.getElementById('pass1').style.borderColor = "red";
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'პაროლი არასწორია';
    input.style.borderColor = "red"
  }
}
// popUp Page 
var myPopup = document.getElementById("myPopup");
var btn = document.getElementById("register");
var span = document.getElementsByClassName("close")[0];
var firstName = document.getElementById("name");
var secondName = document.getElementById("second-name");
var eMail = document.getElementById("email");
var resultName = document.getElementById("input-name");
var resultSecondName = document.getElementById("input-second-name");
var resultEmail = document.getElementById("input-email");
var resultRegion = document.getElementById("input-region");
var resultPosition = document.getElementById("input-position");

btn.addEventListener("click", function(e){
  e.preventDefault();
  myPopup.style.display = "block";
  resultName.innerHTML = firstName.value;
  resultSecondName.innerHTML = secondName.value;
  resultEmail.innerHTML = eMail.value;
})
span.onclick = function() {
  myPopup.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == myPopup) {
    myPopup.style.display = "none";
  }
}
