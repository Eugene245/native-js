
class Cart {
    constructor() {
        this.prodArray = []
        this.totalPrice = 0
    }
    add(name, price) {
        this.prodArray.push({"name": name, "price": price})
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
            let prodCost = e.target.parentElement.parentElement.getElementsByClassName("product-block__info-cost")[0].innerText
            newCart.add(prodName, prodCost)
            newCart.count(Number(prodCost.replace("$", "")));
            prodTotalPriceSpan.innerText = `$${newCart.totalPrice}`
        })
    }
    
}