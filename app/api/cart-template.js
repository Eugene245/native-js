import cartItem from '../api/cart-item.js'
import CartStore from '../js/local-storage.js'
import processToCheckout from '../js/process-to-checkout.js'

function CartListItemDraw(cartList, totalAmount) {  
  for (let i = 0; i < localStorage.length; i++) {
      let LSKey = localStorage.key(i)
    let prodObj = JSON.parse(localStorage.getItem(LSKey))

    cartList += cartItem(LSKey, prodObj.prodName, prodObj.supName, prodObj.prodCost, prodObj.img, prodObj.quantity)  
    totalAmount += (prodObj.quantity * prodObj.prodCost)

  }
  deleteItemListen();
  qtyChangeItemListen();
  return [cartList, totalAmount]
}

export function qtyChangeItemListen() {
  let qtyInput = document.getElementsByClassName("input_qty")  
    setTimeout(() => {
      for (let i = 0; i < qtyInput.length; i++) {
          qtyInput[i].addEventListener("change", e => {
          let id = qtyInput[i].parentElement.parentElement.getAttribute("data-product-id")
          
          let localStorageObj = JSON.parse(localStorage.getItem(id))
          
          localStorageObj.quantity = qtyInput[i].value
          CartStore(id, localStorageObj)
          document.querySelector(".wrapper").innerHTML = DrawCart();
          processToCheckout()
        })
      }
    }, 0);
}

export function deleteItemListen() {
  let crossIcon = document.getElementsByClassName("cart-list__cross-icon")  
    setTimeout(() => {
      for (let i = 0; i < crossIcon.length; i++) {
          crossIcon[i].addEventListener("click", e => {
          localStorage.removeItem(e.target.parentElement.parentElement.getAttribute("data-product-id"))
          document.querySelector(".wrapper").innerHTML = DrawCart();
          processToCheckout();
        })
      }
    }, 0);
}

 export function DrawCart(){
   let cartList = ""
   let totalAmount = 0
   if(CartListItemDraw(cartList, totalAmount)[1] !== 0)
    document.querySelector(".cart-icon span").innerText = `$${CartListItemDraw(cartList, totalAmount)[1]}`    

  
   return `<div class="wrapper wrapper_with_aside">
   <ul class="breadcrumb">
     <li>
         <a href=""><span>Home</span></a>
     </li>
     <li>
       <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8">
         <path fill="#9B9B9A" fill-rule="evenodd" d="M5.005 4L.99 8.008V-.01z"/>
       </svg>
     </li>
     <li>
         <a href=""><span>Cart</span></a>
     </li>
   </ul>
   <div class="cart-container">
     <div class="cart-headers">
       <ul>
         <li class="cart-header-item-detail"><span>ITEM DETAIL</span></li>
         <li class="cart-header-price"><span>PRICE</span></li>
         <li class="cart-header-qty"><span>QTY</span></li>
       </ul>
     </div>
     <div class="cart-list-separation-line"></div>
     <div class="cart-list">
       <ul>
       ${CartListItemDraw(cartList, totalAmount)[0]}
       </ul>
     </div>
     <div class="cart-list-separation-line"></div>
   </div>
   <form action="" class="coupon-form">
     <input type="text" class="input input_coupon_code" placeholder="Coupon code">
     <button class="button button_disable">APPLY</button>
   </form>
   <div class="total-amount">
     <div class="total-amount__subtotal">
       <span class="total-amount__subtotal-title">Subtotal</span>
       <span class="total-amount__subtotal-value">$${CartListItemDraw(cartList, totalAmount)[1]}</span>
     </div>
     <div class="total-amount__shipping">
       <span class="total-amount__shipping-title">Shipping</span>
       <span class="total-amount__shipping-value">$5.00</span>
     </div>
     <div class="total-amount-block">
       <div class="total-amount-block__text">
         <span class="total-amount-block__title">Total Amount</span>
         <span class="total-amount-block__value">$${CartListItemDraw(cartList, totalAmount)[1] + 5}</span>
       </div>
       <button class="button button_process_to_checkout">PROCESS TO CHECKOUT</button>
     </div>
   </div>
 </div>
 <aside class="aside">
   <div class="banner">
     <img src="assets/img/ad@1x.png" alt="">
   </div>
 </aside>`
 }