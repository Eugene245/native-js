import cartItem from '../api/cart-item.js'

let cartList = ""

function CartListItemDraw() {
  for (let i = 0; i < localStorage.length; i++) {
    let prodObj = JSON.parse(localStorage.getItem(i))
    console.log(prodObj)
    cartList += cartItem(prodObj.name, prodObj["supplier's name"], prodObj.cost, prodObj.img)
  }
  return cartList
}

 export default function(){
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
       ${CartListItemDraw()}
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
       <span class="total-amount__subtotal-value">$145.84</span>
     </div>
     <div class="total-amount__shipping">
       <span class="total-amount__shipping-title">Shipping</span>
       <span class="total-amount__shipping-value">$5.00</span>
     </div>
     <div class="total-amount-block">
       <div class="total-amount-block__text">
         <span class="total-amount-block__title">Total Amount</span>
         <span class="total-amount-block__value">$254.84</span>
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