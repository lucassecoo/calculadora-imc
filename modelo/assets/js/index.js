let res = document.querySelector('div#res')
let peso = document.querySelector('input#ipeso')
let altura = document.querySelector('input#ialtura')
let imc = Number(peso.value) / Number(altura.value)**2
function calcular(){
    res.innerHTML = ''
    if(imc < 18,5){
        res.innerHTML = ('Abaixo do peso')
    }
    
    
    peso.value =''
    altura.value = ''
}