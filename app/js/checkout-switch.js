import formValues from '../api/links/checkout-form-values.js'

export default function() {
  let shippingAddressSection = document.getElementsByClassName("shipping-address-section")
  let paymentSection = document.getElementsByClassName("payment-section")

  let formInputs = document.querySelectorAll(".shipping-address-form input")
  formInputs.forEach( (element, i) => {
    element.addEventListener("change", e => {
      
      formValues[i] = element.value
    })
  })


  shippingAddressSection[0].addEventListener("click", e => {
    formInputs.forEach( (element, i) => {
      if(formValues[i] !== undefined)
        element.value = formValues[i]
    })
    document.getElementsByClassName("payment-form")[0].setAttribute("style", "display: none");
    setTimeout(() => {
      shippingAddressSection[0].setAttribute("style", "color: #8bc34a");
      paymentSection[0].setAttribute("style", "color: #878786");
      document.getElementsByClassName("checkout-triangle")[0].setAttribute("style", "left: 33%");
      document.getElementsByClassName("shipping-address-form")[0].setAttribute("style", "display: block");
    }, Math.random() * 2000)
  })
  
  paymentSection[0].addEventListener("click", e => {
    document.getElementsByClassName("shipping-address-form")[0].setAttribute("style", "display: none");
    setTimeout(() => {
      paymentSection[0].setAttribute("style", "color: #8bc34a");
      shippingAddressSection[0].setAttribute("style", "color: #878786");
      document.getElementsByClassName("checkout-triangle")[0].setAttribute("style", "left: 66.67%");
      document.getElementsByClassName("payment-form")[0].setAttribute("style", "display: block");
    }, Math.random() * 2000)
  })
}

