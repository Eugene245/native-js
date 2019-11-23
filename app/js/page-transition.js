import checkoutSwitch from '../js/checkout-switch.js'
import ModalWindow from '../js/modal.js'
import { DrawCart, deleteItemListener } from '../api/cart-template.js'

function sendRequest(url) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = () => {
      resolve(xhr.responseText)
    }
    xhr.onerror = () => {
      reject(new Error("Network Error"));
    }
    xhr.send();
  });
}


export default function() {
  let wrapper = document.querySelector(".wrapper")

  document.querySelector(".cart-icon svg").addEventListener("click", e => {
    let title = 'cart';
    let url = "http://localhost:3000/cart";
    wrapper.innerHTML = DrawCart();
    deleteItemListener();
      wrapper.querySelector(".button_process_to_checkout").addEventListener("click", e => {
        let title = 'checkout';
        let url = "http://localhost:3000/checkout";
        history.pushState({}, title, url)
        sendRequest("http://localhost:3000/checkout.html")
          .then( response => {
            wrapper.innerHTML = response            
              checkoutSwitch();
            wrapper.querySelector(".button-checkout-payment").addEventListener("click", e => {
              let title = 'Success';
              let url = "http://localhost:3000/payment-success";
              setTimeout(() => {
                sendRequest("http://localhost:3000/payment-success.html")
                .then(response => {
                  wrapper.innerHTML = response
                  history.pushState({}, title, url)
                })
              }, Math.random() * 2000)
            })
      })
      })
    history.pushState({}, title, url)
    ModalWindow();
  })
}