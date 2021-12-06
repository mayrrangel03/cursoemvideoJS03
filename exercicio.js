let num= document.getElementById('numero')
let lista = document.getElementById('flista')
let res= document.getElementById('resultado')
let valores= []
let n = Number(num.value)
function adicionar() {
   if ( n > 100 ){
         window.alert('Numero invalido!')
    } else { 
        lista.innerHTML=""
        var item = document.createElement('option')
        item.text= `numero ${n}`
        lista.appendChild(item)
    }
 

}
