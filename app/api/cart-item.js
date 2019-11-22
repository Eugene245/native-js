export default function (id, prodName, supName, cost, img) {
    return `<li class="cart-list-item" data-product-id="${id}">
    <div class="cart-list__cross-icon">
      <img src="assets/img/cross.png" alt="">
    </div>
    <div class="product-icon cart-list__product-icon">
      <img src="${img}" alt="">
    </div>
    <div class="cart-list__product-info">
      <div class="cart-list__product-name">
        <span>${prodName}</span>
      </div>
      <div class="cart-list__supplier-name">
        <span>${supName}</span>
      </div>
    </div>
    <div class="cart-list__product-price">
      <span>${cost}</span>
    </div>
    <div class="cart-list__qty-input">
      <input type="text" class="input input_qty">
    </div>
    <div class="cart-list__product-total-price">
      <span>${cost}</span>
    </div>
    </li>`
}