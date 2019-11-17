export default function() {
  let shippingAddressSection = document.getElementsByClassName("shipping-address-section")
  let paymentSection = document.getElementsByClassName("payment-section")

  shippingAddressSection[0].addEventListener("click", e => {
      shippingAddressSection[0].setAttribute("style", "color: #8bc34a");
      paymentSection[0].setAttribute("style", "color: #878786");
      document.getElementsByClassName("checkout-triangle")[0].setAttribute("style", "left: 33%");
      document.getElementsByClassName("payment-form")[0].setAttribute("style", "display: none");
      document.getElementsByClassName("shipping-address-form")[0].setAttribute("style", "display: block");
  })

  paymentSection[0].addEventListener("click", e => {
      paymentSection[0].setAttribute("style", "color: #8bc34a");
      shippingAddressSection[0].setAttribute("style", "color: #878786");
      document.getElementsByClassName("checkout-triangle")[0].setAttribute("style", "left: 66.67%");
      document.getElementsByClassName("shipping-address-form")[0].setAttribute("style", "display: none");
      document.getElementsByClassName("payment-form")[0].setAttribute("style", "display: block");
  })
}