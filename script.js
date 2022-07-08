function contar() {
    var txtn1 = window.document.getElementById('txtn1')
    var txtn2 = window.document.getElementById('txtn2')
    var txtn3 = window.document.getElementById('txtn3')
    var res = window.document.getElementById('res')
    
    if (txtn1.value.length == 0 || txtn2.value.length == 0 || txtn3.value.length == 0) {
        res.innerHTML = '[Erro] Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        var n1 = Number(txtn1.value)
        var n2 = Number(txtn2.value)
        var n3 = Number(txtn3.value)

        if (n3 <= 0) {
            window.alert ('Impossível contar. Contando com passo = 1.')
            n3 = 1
        }
        
        if (n1 < n2) { 
            for (var c = n1; c <= n2; c += n3) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (var c = n1; c >= n2; c -= n3) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}