
class Cart {
    constructor() {
        this.prodArray = []
        this.totalPrice = 0
    }
    add(name, price) {
        this.prodArray.push({"name": name, "price": price})
        this.totalPrice += price
        return [this.prodArray, this.totalPrice];
    }
}

export default function() {
    
    let newCart = new Cart()
    
    let cartButtonList = document.getElementsByClassName("product-blocks__info-arrow")
    
    for (let i = 0; i < cartButtonList.length; i++) {
        cartButtonList[i].addEventListener("click", e => {
            let totalCartPrice = newCart.add(
                e.target.parentElement.parentElement.getElementsByClassName("product-block__info-product-name")[0].innerText,
                e.target.parentElement.parentElement.getElementsByClassName("product-block__info-cost")[0].innerText)
                console.log(totalCartPrice[1], Number(totalCartPrice[1].replace("$", "")))
        })
    }
    
}