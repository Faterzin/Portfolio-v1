var carwhite = document.getElementById("white") //carro branco
var carred = document.getElementById("red") //carro vermelho
var result = document.getElementById("result") //????
var branco = document.getElementById("branco") //botao branco
var vermelho = document.getElementById("vermelho") //botao vermelho
var resetar = document.getElementById("resetar") //botao resetar
var acelerar = document.getElementById("acelerar") //botao acelerar
var desacelerar = document.getElementById("desacelerar") //botao desacelerar
var btns = document.getElementsByClassName("btn") //botoes de controle

//selecionar carro branco
carwhite.addEventListener("click", function(){
    result.textContent = "Branco"
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    for(i=0; i<=2; i++){
        btns[i].style.display = "block"
    }
})

branco.addEventListener("click", function(){
    result.textContent = "Branco"
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black" 
    for(i=0; i<=2; i++){
        btns[i].style.display = "block"
    }
})

//selecionar carro vermelho
carred.addEventListener("click", function(){
    result.textContent = "Vermelho"
    document.body.style.backgroundColor = "DarkRed"
    document.body.style.color = "white"
    for(i=0; i<=2; i++){
        btns[i].style.display = "block"
    }
})

vermelho.addEventListener("click", function(){
    result.textContent = "Vermelho"
    document.body.style.backgroundColor = "DarkRed"
    document.body.style.color = "white"
    for(i=0; i<=2; i++){
        btns[i].style.display = "block"
    }
})

//botao resetar
resetar.addEventListener("click", function(){
    result.textContent = "?"
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    for(i=0; i<=2; i++){
        btns[i].style.display = "none"
    }
    //voltar carros para posicao inicial
    carwhite.style.top = "60px"
    carred.style.top = "60px"
})

//botao acelerar
acelerar.addEventListener("click", function(){
    if(result.textContent == "?"){
        alert("Selecione primeiro um dos carros.")
        return
    }
    var carroAtual = null
    if(result.textContent == "Branco"){
        carroAtual = carwhite
    } else {
        carroAtual = carred
    }
    var topAtual = parseInt(window.getComputedStyle(carroAtual).top)
    if(topAtual > 10){
        carroAtual.style.top = (topAtual - 5) + "px"
    }
})

//botao desacelerar
desacelerar.addEventListener("click", function(){
    if(result.textContent == "?"){
        alert("Selecione primeiro um dos carros.")
        return
    }
    var carroAtual = null
    if(result.textContent == "Branco"){
        carroAtual = carwhite
    } else {
        carroAtual = carred
    }
    var topAtual = parseInt(window.getComputedStyle(carroAtual).top)
    if(topAtual < 100){
        carroAtual.style.top = (topAtual + 5) + "px"
    }
})

//seta pra cima e pra baixo
document.addEventListener("keydown", function(event){
    if(event.key == "ArrowUp"){
        if(result.textContent == "?"){
            alert("Selecione primeiro um dos carros.")
            return
        }
        var carroAtual = null
        if(result.textContent == "Branco"){
            carroAtual = carwhite
        } else {
            carroAtual = carred
        }
        var topAtual = parseInt(window.getComputedStyle(carroAtual).top)
        if(topAtual > 10){
            carroAtual.style.top = (topAtual - 5) + "px"
        }
    }
    if(event.key == "ArrowDown"){
        if(result.textContent == "?"){
            alert("Selecione primeiro um dos carros.")
            return
        }
        var carroAtual = null
        if(result.textContent == "Branco"){
            carroAtual = carwhite
        } else {
            carroAtual = carred
        }
        var topAtual = parseInt(window.getComputedStyle(carroAtual).top)
        if(topAtual < 100){
            carroAtual.style.top = (topAtual + 5) + "px"
        }
    }
})