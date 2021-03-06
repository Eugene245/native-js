import checkoutListItem from './checkout-list-item.js'
import {CartTotalAmountDraw} from './cart-template.js'

function CheckoutListItemDraw(checkoutList) {  
    for (let i = 0; i < localStorage.length; i++) {
        let LSKey = localStorage.key(i)
      let prodObj = JSON.parse(localStorage.getItem(LSKey))
      checkoutList += checkoutListItem(prodObj.prodName, prodObj.prodCost, prodObj.img, prodObj.quantity)  
    }
    return checkoutList
  }

export default function() {
    let checkoutList = ""
    return `<ul class="breadcrumb">
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
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8">
                    <path fill="#9B9B9A" fill-rule="evenodd" d="M5.005 4L.99 8.008V-.01z"/>
                </svg>
            </li>
            <li>
                <a href=""><span>Checkout</span></a>
            </li>
        </ul>
        <div class="loader" style="display: none;"></div>
        <div class="checkout">
            <div class="checkout-buttons">
                <div class="shipping-address-section"><span>Shipping Address</span></div>
                <div class="payment-section"><span>Payment</span></div>
            </div>
            <div class="checkout-triangle">
                <div class="checkout-triangle-empty"></div>
            </div>
            <div class="checkout-form">
                <div class="loader" style="display: none;"></div>
                <form class="shipping-address-form">
                    <div class="shipping-address-form__first-name">
                        <strong class="input-title">First Name*</strong>
                        <input type="text" class="input input_shipping_address_small" placeholder="Jhone">
                    </div>
                    <div class="shipping-address-form__last-name">
                        <strong class="input-title">Last Name*</strong>
                        <input type="text" class="input input_shipping_address_small" placeholder="Smith">
                    </div>
                    <div class="shipping-address-form-company-name">
                        <strong class="input-title">Company Name</strong>
                        <input type="text" class="input input_shipping_address_small" placeholder="Rosuson Industries">
                    </div>
                    <div class="shipping-address-form__country">
                        <strong class="input-title">Country*</strong>
                        <input type="text" class="input input_shipping_address_small" placeholder="United Kingdom (UK)">
                    </div>
                    <div class="shipping-address-form__city">
                        <strong class="input-title">Town / City*</strong>
                        <input type="text" class="input input_shipping_address_small" placeholder="eg. New york">
                    </div>
                    <div class="shipping-address-form__postcode">
                        <strong class="input-title">Postcode*</strong>
                        <input type="text" class="input input_shipping_address_small" placeholder="eg. 358745">
                    </div>
                    <div class="shipping-address-form__address">
                        <span class="input-title">
                            <strong>Address*</strong> 
                            <span class="input-required">* Required</span>
                        </span>
                        <input type="text" class="input input_shipping_address_big" placeholder="eg. 2nd steer, Costrica, Uk 354548">
                    </div>
                    <div class="shipping-address-form__email">
                        <strong class="input-title">Email Address*</strong>
                        <input type="text" class="input input_shipping_address_small" placeholder="abc@xyz.com">
                    </div>
                    <div class="shipping-address-form__phone">
                        <strong class="input-title">Phone</strong>
                        <input type="text" class="input input_shipping_address_small" placeholder="eg. 94 788 1221">
                    </div>
                    <div class="shipping-address-form__checkbox">
                        <label class="checkbox-container">Create an Account?
                            <input type="checkbox" >
                            <span class="checkbox-checkmark"></span>
                        </label>
                        <label class="checkbox-container">Create an Account?
                            <input type="checkbox" checked="checked">
                            <span class="checkbox-checkmark">
                                
                            </span>
                        </label>
                    </div>
                    <div class="shipping-address-form-buttons">
                        <button class="shipping-address-form-buttons-back button button_white">Back</button>
                        <button class="shipping-address-form-buttons-next button button_green">Next</button>
                    </div>
                </form>
                <div class="payment-form">
                    <div class="order-list-form">
                        <div class="oreder-list-title">
                            <span>Your Order</span>
                        </div>
                            <ul class="order-list">
                                ${CheckoutListItemDraw(checkoutList)}
                                <li class="order-list-shipping-charge">
                                    <span>Shipping Charge</span>
                                    <span>$5.00</span>
                                </li>
                            </ul> 
                        </div>
                    <div class="payment-info">
                        <div class="payment-info__card-radio">
                            <label class="radio-container">
                                <span class="radio-span">Credit Card / Debit Card</span>
                                <input type="radio" checked="checked" name="radio">
                                <span class="radio-checkmark"></span>
                            </label>
                        </div>
                        <div class="payment-form__name-on-card">
                            <span class="input-title">Name on Card</span>
                            <input type="text" class="input input_payment_big" placeholder="Daniel Hecker">
                        </div>
                        <div class="payment-form__card-number">
                            <span class="input-title">Card Number</span>
                            <input type="text" class="input input_payment_big" placeholder="4121 4411 1414 9754">
                        </div>
                        <div class="payment-form__valid-trough">
                            <span class="input-title">Valid Trough</span>
                            <input type="text" class="input input_payment_small" placeholder="MM / DD">
                        </div>
                        <div class="payment-form__cvv">
                            <span class="input-title">CVV</span>
                            <input type="text" class="input input_payment_small" placeholder="eg. 201">
                        </div>
                        <div class="payment-info-paypal">
                            <div class="payment-info__card-radio">
                                <label class="radio-container">
                                    <span class="radio-span">Paypal</span>
                                    <input type="radio" name="radio">
                                    <span class="radio-checkmark"></span>
                                </label>
                            </div>
                            <div class="payment-form__email">
                                <span class="input-title">Email Address</span>
                                <input type="text" class="input input_payment_big" placeholder="abc@xyz.com">
                            </div>
                            <button class="button button-checkout-payment">
                                <span>Pay $${CartTotalAmountDraw() + 5}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
}