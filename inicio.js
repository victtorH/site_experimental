// header
var navbar = document.getElementById("nav-bar")
const ul = document.querySelector("ul.ul")
const al = document.querySelectorAll('a')
const btn = document.getElementById('pesquisa')
const graf = document.querySelector('div.graf')
var int = document.getElementById('int')
const rol = document.querySelector('div.rol')
const aqui = 4
navbar.addEventListener("mouseenter", entrou)
navbar.addEventListener('mouseleave', saiu)
pesquisa.addEventListener('mouseenter', veio)
pesquisa.addEventListener('mouseleave', foi)
int.addEventListener('click',clike)


function entrou() {
  
    ul.style = "background:black;"
    btn.style = "background:black; color:black;"
}
function saiu() {
    for (let con = 0; con < aqui; con++) {
        al[con].style = " color:rgb(194, 194, 194); "
    }

    ul.style = "background:rgba(0, 0, 0, 0.843);"
    pesquisa.style = "background:rgba(0, 0, 0, 0.843); colo:black;"
}
function veio() {
    pesquisa.style = "background-color: orange; boder:4px;"
}
function foi() {
    pesquisa.style = "background-color:black; border: 1px ;"
}
let contador = 0
let conta = 1
function clike( ){
    
    if( conta > contador ){ 
        graf.style = 'transform: rotateZ(360deg); border: 10px solid #5D1CE6;border-bottom-color: #1BE539;border-left-color: #E6841C;margin-left: 295px;' 
        rol.style = 'justify-content: left; border: 2px solid #5D1CE6;'
        int.style = 'background-color:#5D1CE6;transition:5s;'
        contador++
    }else{
   graf.style = 'transform: rotateZ(0deg);border: 10px solid #E62230;border-top-color: #E6E022 ;border-left-color: #22A1E5;' 
   rol.style = ' justify-content: left;border: 2px solid #E62230;'
   int.style = 'background-color:#E62230; transition:5s;'
        conta++
    }
  
}
 
