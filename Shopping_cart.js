function ajouter(e) {
    var child = e.target
    var parent = child.parentElement.parentElement
    var qte = parseInt(parent.querySelector('.qty-text').value)
    var qte1 = qte + 1
    parent.querySelector('.qty-text').value = qte1
    var total1 = parent.querySelector('.sub-total').innerHTML
    var prix = parent.querySelector('.price-amount').innerHTML
    var total1 = prix * qte1
    parent.querySelector('.sub-total').innerHTML = total1
}

function supprimer(e) {
    var child = e.target
    var parent = child.parentElement.parentElement
    var qte = parseInt(parent.querySelector('.qty-text').value)
    var qte1 = qte - 1
    if (qte > 0) {
        parent.querySelector('.qty-text').value = qte1
    }
    var total1 = parent.querySelector('.sub-total').innerHTML
    var prix = parent.querySelector('.price-amount').innerHTML
    var total1 = prix * qte1
    parent.querySelector('.sub-total').innerHTML = total1
}



function addToCart(e) {
    var child = e.target
    var parent = child.parentElement.parentElement.parentElement
    parent.querySelector('.fa-cart-plus').style.color = 'red'
    let x = parseFloat(document.getElementById('sub-total-global').innerHTML)
    let y = parseFloat(parent.querySelector('.sub-total').innerHTML)
    document.getElementById('sub-total-global').innerHTML = x + y
    document.getElementById('total-global').innerHTML = parseFloat(document.getElementById('sub-total-global').innerHTML) + parseFloat(document.getElementById('expedition').innerHTML)

    e.target.parentNode.onclick = undefined
}

function removeFromCart(e) {
    var child = e.target
    var parent = child.parentElement.parentElement.parentElement
    var x = 0
    parent.querySelector('.fa-trash-alt').style.color = 'blue'
    document.getElementById('sub-total-global').innerHTML = parseFloat(document.getElementById('sub-total-global').innerHTML) - parseFloat(parent.querySelector('.sub-total').innerHTML)
    document.getElementById('total-global').innerHTML = parseFloat(document.getElementById('total-global').innerHTML) - parseFloat(parent.querySelector('.sub-total').innerHTML)
    parent.querySelector('.fa-cart-plus').style.color = 'initial'
    parent.querySelector('.qty-text').value = 0
    parent.querySelector('.sub-total').innerHTML = 0
}

function confirmCommand(e) {
    alert("Veuillez confirmer votre commande!")
}