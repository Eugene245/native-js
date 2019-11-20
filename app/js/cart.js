import CartStore from '../js/local-storage.js'
import prodArray from '../api/products-array.js'


class Cart {
    constructor() {
        this.prodArray = []
        this.totalPrice = 0
    }
    add(name, supName, price, img) {
        this.prodArray.push({"name": name, "supplier's name": supName, "price": price, "img": img})
        return this.prodArray
    }
    count(price) {
        this.totalPrice += price
        return this.totalPrice
    }
}

export default function() {
    
    let newCart = new Cart()
    let prodTotalPriceSpan = document.createElement("span")
    prodTotalPriceSpan.style.cssText = "color: #878786; vertical-align: 20%"
    document.querySelector(".cart-icon").appendChild(prodTotalPriceSpan)
    
    let cartButtonList = document.getElementsByClassName("product-blocks__info-arrow")
    
    for (let i = 0; i < cartButtonList.length; i++) {
        cartButtonList[i].addEventListener("click", e => {
            let prodName = e.target.parentElement.parentElement.getElementsByClassName("product-block__info-product-name")[0].innerText
            let prodSupName = e.target.parentElement.parentElement.getElementsByClassName("product-block__info-suppliers-name")[0].innerText
            let prodCost = e.target.parentElement.parentElement.getElementsByClassName("product-block__info-cost")[0].innerText
            let prodImg = e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".product-blocks__block-img img").src            
            newCart.add(prodName, prodSupName, prodCost, prodImg)
            newCart.count(Number(prodCost.replace("$", "")));
            prodTotalPriceSpan.innerText = `$${newCart.totalPrice}`

            newCart.prodArray.forEach( (element, i) => {
                CartStore(i, element)    
            });
            
        })
    }
    
}