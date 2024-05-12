var carinfo1 = document.getElementById("carinfo1")
var carinfo2 = document.getElementById("carinfo2")
var c1 = document.getElementById("c1")
var c2 = document.getElementById("c2")

c1.addEventListener("click", ()=>{
  carinfo2.style.display = 'none';
  carinfo1.style.display = 'flex';
});

c2.addEventListener("click", ()=>{
  carinfo1.style.display = "none";
});
  