import blockText from '../api/product-template.js'
import prodArr from '../api/products-array.js'

function drawBlocks(selector, blocksQty, elementsQty, prodInfoList) {
    let blockSelector = document.querySelector(selector)
    let i = 0, j = 0;
    
    for (;i < blocksQty; i++) {
        if (Object.keys(prodInfoList).length !== 0){
            let num = Math.floor(Math.random() * (elementsQty - j))
            let prodObj = Object.keys(prodInfoList)[num]

            let prodBlock = blockText()(prodInfoList[prodObj].img, prodInfoList[prodObj].supName, prodInfoList[prodObj].prodName, prodInfoList[prodObj].prodCost)
                    
            blockSelector.innerHTML += prodBlock;
            delete prodInfoList[prodObj]
            j++
        }
    }
}

function distributeBlocks(num, blockListLength, prodInfoList) {
    document.querySelector(".home-blocks__first-line").innerHTML = ""
    document.querySelector(".home-blocks__first-column").innerHTML = ""
    document.querySelector(".home-blocks__second-column").innerHTML = ""
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

export default function(category) {    
    let prodInfoList = JSON.parse(prodArr)
    
    if (arguments[0] !== undefined){
        for(let key in prodInfoList) {
            console.log(prodInfoList[key])
            if(prodInfoList[key].category !== category){
                delete prodInfoList[key]
            }
            }
        let blockListLength = Object.keys(prodInfoList).length
        distributeBlocks(blockListLength, blockListLength, prodInfoList)
    }else {
        let blockListLength = Object.keys(prodInfoList).length
        let numOfElements = Math.floor(Math.random() * (blockListLength + 1))
        distributeBlocks(numOfElements, blockListLength, prodInfoList)
    }
        
}