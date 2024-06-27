var til2 = document.querySelector("h2.titulo2")
var txt1 = document.getElementById("texto1")
var tx = document.getElementById("txtpr")
var titulo = document.querySelector("h1#Titulo")
var btn = document.getElementById("btn")
tx.addEventListener("mouseenter",passou)
tx.addEventListener("mouseleave",voltou)
btn.addEventListener("mouseleave",saiu)
btn.addEventListener("mouseenter",entrou)
btn.addEventListener("click",clique)
  function passou(){
    titulo.style = "  font-size: 4em; color:orange;"
      tx.style.color = "orange"
  }
function voltou(){
  titulo.style = " color:transparent;-webkit-text-stroke: 1px white;font-size: 3.5em; "
}
function entrou(){
  passou.apply()
}
function saiu(){
  voltou.apply()
}
