function formatMoney(value){
    value = Math.ceil(value * 100)/ 100
    value = value.toFixed(2)
    return '$ ' + value 
}

function formatSplit(value){
    if(value == 1) return value + ' pessoa'
    return value + ' pessoas'
}

function update(){
    let conta = Number(document.getElementById('suaConta').value)
    let gorjePorcen = document.getElementById('inputGorje').value
    let dividir = document.getElementById('inputDividir').value

    let valorGorje = conta * (gorjePorcen / 100)
    let contaTotal = conta + valorGorje
    let restante = contaTotal / dividir
    
    document.getElementById('gorjePorcen').innerHTML = gorjePorcen + '% '
    document.getElementById('tipValue').innerHTML = formatMoney(valorGorje)
    document.getElementById('totalWithTip').innerHTML = formatMoney(contaTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(dividir)
    document.getElementById('billEach').innerHTML = formatMoney(contaTotal / dividir)
}