function calcular(){
    let res = document.querySelector('div#res')
    let peso = document.querySelector('input#ipeso')
    let altura = document.querySelector('input#ialtura')
    let imc = Number(peso.value) / Number(altura.value)**2
    res.innerHTML = ''
    res.style.backgroundColor = '#1DA0AC'
    res.style.textAlign = 'center'
    res.style.marginTop = '7px'
    res.style.padding = '5px'
    res.style.fontWeight = 'bold'
    res.style.borderRadius = '6px'
    if(imc < 18.5){
        res.innerHTML += ('Abaixo do peso')
    } else if (imc > 18.5 && imc < 24.9){
        res.innerHTML += ('Peso normal')
    } else if (imc > 25 && imc < 29.9){
        res.innerHTML += ('Sobrepeso')
    } else if (imc > 30 && imc < 34.9){
        res.innerHTML += ('Obesidade grau 1')
    } else if (imc > 35 && imc < 39.9){
        res.innerHTML += ('Obesidade grau 2')
    }else{
        res.innerHTML += ('Obesidade grau 3')
    }
    
    peso.value =''
    altura.value = ''
}
