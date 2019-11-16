
function drawBlocks(selector, blocksQty, elementsQty, prodInfoList) {
    let blockSelector = document.querySelector(selector)
    let i = 0, j = 0;
    for (;i < blocksQty; i++) {
        if (Object.keys(prodInfoList).length !== 0){
            let num = Math.floor(Math.random() * (elementsQty - j))
            let prodObj = Object.keys(prodInfoList)[num]

            let blockText = `<div class="product-blocks-block">
                        <div class="product-blocks__block-img">
                            <img src="${prodInfoList[prodObj].img}" alt="">
                        </div>
                        <div class="product-block__info-container">
                            <div class="product-block__info">
                                <span class="product-block__info-suppliers-name">${prodInfoList[prodObj].supName}</span>
                                <span class="product-block__info-product-name">${prodInfoList[prodObj].prodName}</span>
                                <span class="product-block__info-cost">${prodInfoList[prodObj].prodCost}</span>
                            </div>
                            <div class="product-blocks__info-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20">
                                    <path fill="#C6C6C5" fill-rule="evenodd" d="M2.055.006l9.947 9.938-1.882 1.88-.024-.024-8.202 8.206-1.889-1.888 8.202-8.205L.174 1.886l1.88-1.88z"/>
                                </svg>
                            </div>
                        </div>
                    </div>`
                    
            blockSelector.innerHTML += blockText;
            delete prodInfoList[prodObj]
            j++
        }
    }
}

function distributeBlocks(num, blockListLength, prodInfoList) {
    if (num === 0) {
        console.log("No content")
    }else if (num === 1) {
        drawBlocks(".home-blocks__first-line", 1, blockListLength, prodInfoList)
    }else if (num === 2) {
        drawBlocks(".home-blocks__first-line", 2, blockListLength, prodInfoList)
    }else if (num === 3) {
        drawBlocks(".home-blocks__first-line", 3, blockListLength, prodInfoList)
    }else {
        drawBlocks(".home-blocks__first-line", 3, blockListLength, prodInfoList)
        drawBlocks(".home-blocks__first-column", Math.round((num - 3)/2), num - 3, prodInfoList)
        drawBlocks(".home-blocks__second-column", Math.floor((num - 3)/2), num - 3 - Math.round((num - 3)/2), prodInfoList)
    }
}

export default function() {
    const xhr = new XMLHttpRequest()
        xhr.open("GET", "http://localhost:3000/api/products-array.json", true)
        xhr.onload = () => {
            let prodInfoList = JSON.parse(xhr.responseText)
            let blockListLength = Object.keys(prodInfoList).length
            let numOfElements = Math.floor(Math.random() * (blockListLength + 1))
            distributeBlocks(numOfElements, blockListLength, prodInfoList)
        }
        xhr.send()
}