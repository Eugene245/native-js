import checkoutSwitch from '../js/checkout-switch.js'
import {sendRequest} from '../js/page-transition.js'
import Checkout from '../api/templates/checkout.js'

export default function() {
  let wrapper = document.querySelector(".wrapper")
  wrapper.querySelector(".button_process_to_checkout").addEventListener("click", e => {
    let title = 'checkout';
    let url = "http://localhost:3000/checkout";
    history.pushState({}, title, url)
        wrapper.innerHTML = Checkout()            
          checkoutSwitch();
        wrapper.querySelector(".button-checkout-payment").addEventListener("click", e => {
          let title = 'Success';
          let url = "http://localhost:3000/payment-success";
          document.querySelector(".checkout").innerHTML = ""
          document.querySelector(".loader").setAttribute("style", "display")
          setTimeout(() => {
            document.querySelector(".loader").setAttribute("style", "display: none")
            sendRequest("http://localhost:3000/api/templates/payment-success.html")
            .then(response => {
              document.getElementsByClassName("loader")[0].setAttribute("style", "display: none");
              wrapper.innerHTML = response
              localStorage.clear()
              document.querySelector(".cart-icon span").innerText = ""
              history.pushState({}, title, url)
            })
          }, Math.random() * 2000)
        })
  })
}