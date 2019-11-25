import CartStore from '../js/local-storage.js'
import prodList from '../api/products.js'
import {CartTotalAmountDraw} from '../api/cart-template.js'

class Cart {
    constructor() {
        this.prodArray = []
        this.totalPrice = 0
    }
    add(id) {
        CartStore(id, prodList[`${id}`]) 
        this.prodArray.push(prodList[`${id}`])
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
                let block = cartButtonList[i].parentElement.parentElement
                let id = block.getAttribute("data-product-id")
                // let prodCost = block.getElementsByClassName("product-block__info-cost")[0].innerText.replace("$", "")

                newCart.add(id)

                // newCart.count(Number(prodCost.replace("$", "")));
                
                // CartStore(id, prodList[`${id}`]) 
                prodTotalPriceSpan.innerText = `$${CartTotalAmountDraw()}`
                
                   
                
            })
        }
    
}