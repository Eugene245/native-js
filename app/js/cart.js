import CartStore from '../js/local-storage.js'
import prodList from '../api/products.js'

class Cart {
    constructor() {
        this.prodArray = []
        this.totalPrice = 0
    }
    add(id, name, supName, price, img) {
        this.prodArray.push({"id": id, "name": name, "supplier's name": supName, "price": price, "img": img})
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
            let block = e.target.parentElement.parentElement.parentElement
            let id = block.getAttribute("data-product-id")
            // let prodName = block.getElementsByClassName("product-block__info-product-name")[0].innerText
            // let prodSupName = block.getElementsByClassName("product-block__info-suppliers-name")[0].innerText
            // let prodCost = block.getElementsByClassName("product-block__info-cost")[0].innerText.replace("$", "")
            
            // let prodImg = block.querySelector(".product-blocks__block-img img").src   
            

            // newCart.add(id, prodName, prodSupName, prodCost, prodImg)
            // newCart.count(Number(prodCost.replace("$", "")));
            // prodTotalPriceSpan.innerText = `$${newCart.totalPrice}`
            console.log(id, prodList[`${id}`])
            CartStore(id, prodList[`${id}`])    
            
        })
    }
    
}