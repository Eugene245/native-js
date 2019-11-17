import checkoutSwitch from '../js/checkout-switch.js'
import ModalWindow from '../js/modal.js'

let wrapper = document.querySelector(".wrapper")

export default function() {
  document.querySelector(".cart-icon svg").addEventListener("click", e => {
    let title = 'cart';
    let url = "http://localhost:3000/cart";
    const xhrCart = new XMLHttpRequest();
    xhrCart.open("GET", "http://localhost:3000/cart.html", true)
    xhrCart.onload = () => {
      wrapper.innerHTML = xhrCart.responseText
      wrapper.querySelector(".button_process_to_checkout").addEventListener("click", e => {
        let title = 'checkout';
        let url = "http://localhost:3000/checkout";
        const xhrCheckout = new XMLHttpRequest();
        xhrCheckout.open("GET", "http://localhost:3000/checkout.html", true)
        xhrCheckout.onload = () => {
          wrapper.innerHTML = xhrCheckout.responseText
          checkoutSwitch();
          wrapper.querySelector(".button-checkout-payment").addEventListener("click", e => {
            let title = 'Success';
            let url = "http://localhost:3000/payment-success";
            const xhrSuccess = new XMLHttpRequest();
            xhrSuccess.open("GET", "http://localhost:3000/payment-success.html", true)
            xhrSuccess.onload = () => {
              wrapper.innerHTML = xhrSuccess.responseText
            }
            xhrSuccess.send()
            history.pushState({}, title, url)
          })
        }
        xhrCheckout.send()
        history.pushState({}, title, url)
      })
    }
    xhrCart.send()
    history.pushState({}, title, url)
    ModalWindow();
  })
}