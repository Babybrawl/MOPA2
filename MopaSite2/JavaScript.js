var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function myFunction() {
  document.getElementById("Menu").style.visibility = "visible";
  document.getElementById("Menu").style.left = "0";
}

function myFunction2() {
  document.getElementById("Menu").style.visibility = "hidden";
  document.getElementById("Menu").style.left = "-80%";
}

function BorderReset(){
  var dimensions= document.getElementById("img1");

  var heightx= dimensions.clientHeight;

  document.getElementById("BorderImg").style.height = heightx-60 + "px";
}

setTimeout(BorderReset, 0);
setTimeout(BorderReset, 0);
setTimeout(BorderReset, 0);

screen.orientation.addEventListener("change", function(e) {
    BorderReset();
});

window.onresize = function(){
  BorderReset();
  }

function DarkMode() {
  document.body.style.backgroundColor = "#03071e";
  document.getElementById("titre").innerHTML = "lala";
}

document.querySelector('#selectMode').onchange = mchange();
localStorage.setItem("colorMode", "#dddddd");
localStorage.setItem("colorModeText", "White");
localStorage.setItem("test", 0);


function mchange() {
  if (localStorage.getItem("test") == 0){
    document.body.style.backgroundColor = "#000000";
    document.body.style.color="white";
    document.getElementById("footer").style.backgroundColor = "#4F6D7A";
    document.getElementById("classMode").innerHTML = "dark";
    document.getElementById('myCheckBox').checked = true;
  }else{
    document.body.style.backgroundColor = "#dddddd";
    document.body.style.color="black";
    document.getElementById("footer").style.backgroundColor = "#AAB9E4";
    document.getElementById("classMode").innerHTML = "light";
    document.getElementById('myCheckBox').checked = false;
  }
}


function changeClassText(){
  if(localStorage.getItem("test") == 0){
    document.getElementById("classMode").innerHTML = "light";
      localStorage.setItem("test", 1);
      document.body.style.backgroundColor = "#dddddd";
      document.body.style.color="#000000";
      document.getElementById('myCheckBox').checked = false;
      document.getElementById("footer").style.backgroundColor = "#AAB9E4";
  }else{
    document.getElementById("classMode").innerHTML = "dark";
    localStorage.setItem("test", 0);
    document.body.style.backgroundColor = "#000000";
    document.body.style.color="white";
    document.getElementById('myCheckBox').checked = true;
    document.getElementById("footer").style.backgroundColor = "#4F6D7A";
  }
}

function changeLang(lang){
  alert(lang);
  document.getElementById("titre").innerHTML = data[lang].TitreImg;
  //document.getElementById("TitreImg2") = data[lang].TitreImg2
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let data = {
  french: {
    TitreImg: "NOTRE CLUB",
    TitreImg2: "Bienvenue chers/ères joueurs/euses brawl stars, dans MOPA ! <br> <br> <br> <br> Voici notre site où vous pourrez trouver des informations sur nous et notre club dont notamment nos réseaux ! N’hésitez à faire passer le lien entre vous, merci !"
  },
  english: {
    TitreImg: "OUR CLUB",
    TitreImg2: "Welcome, dear brawl stars, to MOPA! <br> <br> <br> <br> Here's our website where you can find information about us and our club, including our networks! Please feel free to pass on the link, thank you!"
  },
}