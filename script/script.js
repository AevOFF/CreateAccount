const form1 = document.getElementById('Form1');
const form2 = document.getElementById('Form2');
const form3 = document.getElementById('Form3');
const next1 = document.getElementById('Next1');
const next2 = document.getElementById('Next2');
const previous1 = document.getElementById('Previous1');
const previous2 = document.getElementById('Previous2');
const progress =document.getElementById('progress')

next1.onclick = function (){
    form1.style.left = "-450px";
    form2.style.left = "40px";
    progress.style.width = "240px";
}
previous1.onclick = function (){
    form1.style.left = "40px";
    form2.style.left = "-450px";
    progress.style.width= "120px";
}
next2.onclick = function (){
    form2.style.left = "-450px";
    form3.style.left = "40px";
    progress.style.width= "360px";
}
previous2.onclick = function (){
    form2.style.left = "40px";
    form3.style.left = "-450px";
    progress.style.width= "240px";
}