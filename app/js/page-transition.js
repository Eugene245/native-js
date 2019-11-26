import ModalWindow from '../js/modal.js'
import { DrawCart } from '../api/templates/cart-template.js'
import processToCheckout from '../js/process-to-checkout.js'

export function sendRequest(url) {
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

export function pageTransition() {
  let wrapper = document.querySelector(".wrapper")

  document.querySelector(".cart-icon svg").addEventListener("click", e => {
    let title = 'cart';
    let url = "http://localhost:3000/cart";
    wrapper.innerHTML = DrawCart();

    processToCheckout();
      
    history.pushState({}, title, url)
    ModalWindow();
  })
}