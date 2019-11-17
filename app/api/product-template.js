export default function(img, supName, prodName, prodCost) {
  return `<div class="product-blocks-block">
  <div class="product-blocks__block-img">
      <img src="${img}" alt="">
  </div>
  <div class="product-block__info-container">
      <div class="product-block__info">
          <span class="product-block__info-suppliers-name">${supName}</span>
          <span class="product-block__info-product-name">${prodName}</span>
          <span class="product-block__info-cost">${prodCost}</span>
      </div>
      <div class="product-blocks__info-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20">
              <path fill="#C6C6C5" fill-rule="evenodd" d="M2.055.006l9.947 9.938-1.882 1.88-.024-.024-8.202 8.206-1.889-1.888 8.202-8.205L.174 1.886l1.88-1.88z"/>
          </svg>
      </div>
  </div>
</div>`
}