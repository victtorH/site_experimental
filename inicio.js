// header
const tudo = document.getElementById('tudo')
const nav = document.querySelector('.respo')
const ul = document.querySelector('.ul')
const btn = document.getElementById('pesquisa')
const graf = document.querySelector('div.graf')
var int = document.getElementById('int')
const rol = document.querySelector('div.rol')
var anime = document.querySelectorAll('[data-anime]')
const aqui = 4
 window.addEventListener('scroll', ( ) => {
 const windowof = window.pageYOffset
anime.forEach( Element => {   
    
if(windowof > Element.offsetTop - 500  ){
        Element.classList.add('entrou')
 
}else{
    Element.classList.remove('entrou')
}
})})

function movimento(valor,a,b) {
        valor.addEventListener('mouseenter',a)
        valor.addEventListener('mouseleave',b)
}
function click(clickando,a) {
    clickando.addEventListener('click',a)
}


click(tudo,puxando)

  let contador = 0
    let conta = 1
function apertou( ){
  
    if( conta > contador ){ 
        graf.style = 'transform: rotateZ(360deg); border: 10px solid #5D1CE6;border-bottom-color: #1BE539;border-left-color: #E6841C; margin-left:80%;' 
        rol.style = ' border: 2px solid #5D1CE6;'
        int.style = 'background-color:#5D1CE6;transition:5s;'
        contador++
    }else{
   graf.style = 'transform: rotateZ(0deg);border: 10px solid #E62230;border-top-color: #E6E022 ;border-left-color: #22A1E5;' 
   rol.style = ' justify-content: left;border: 2px solid #E62230;'
   int.style = 'background-color:#E62230; transition:5s;'
        conta++
    }
  
}
function puxando(){
     if(conta > contador){
        
 tudo.style = 'position:absolute;z-index:999;width:100%;height:100vh; top:0; left:0; trasition:all 2s;'
   ul.style = 'position: relative; left:20em;top:1.6vh;trasition:all 2s;'
   nav.style = 'position: relative; left:21em;top:1.6vh;trasition:all 2s;'
  
    contador++


  
    }else{
        tudo.style='right:-7.5em;background-color: transparent;'
        ul.style ='position:relative;left: 9em;'
        nav.style = 'position:relative;left: -1em;'
        conta++
    }

 }

