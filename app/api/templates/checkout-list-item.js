
export default function(name, cost, img, qty) {
  return `<li>
    <div class="product-icon order-list__product-icon">
        <img src="${img}" alt="">
    </div>
    <div class="order-list__product-name">
        <span>${name}</span>
    </div>
    <input type="text" class="input input_qty" disabled="disabled" value="${qty}">
    <div class="order-list__product-price">
        <span>$${cost}</span>
    </div>
    </li>`
}