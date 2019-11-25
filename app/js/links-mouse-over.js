
let windowTitle = document.querySelector(".home-decor-block__header-title")
let homeDecor = document.querySelector(".home-decor-block")
let wrapper = document.querySelector(".wrapper")
let header = document.querySelector(".header-top")

function categoryLinksInsert(start, end, numOfColumn, arr) {
    for (let i = start; i < end; i++) {
        let linkKey = Object.keys(arr)[i]
        let linkHtmlString = `<li><a href="">${arr[linkKey]}</a></li>`
        document.querySelector(`.home-decor-block__links-${numOfColumn}-column`).innerHTML += linkHtmlString
    }
}

// console.log([header, wrapper].length)
//         // [header, wrapper].forEach(el => {
//         //     console.log(el)
//         // })

//         for (let i = 0; i < [header, wrapper].length; i++) {
//             console.log([header, wrapper][i])
            
//         }



export default function() {
    document.querySelectorAll(".navbar-link a").forEach(element => {
        element.addEventListener("mouseover", e => {
        e.preventDefault();
        const xhr = new XMLHttpRequest()
    xhr.open("GET", `http://localhost:3000/api/links/${e.target.className.replace("navbar-link__", "")}.json`, true)
        xhr.onload = () => {
            let linkNameList = JSON.parse(xhr.responseText)
            let numOfLinks = Math.floor(Math.random() * (Object.keys(linkNameList).length + 1))
            homeDecor.classList.add("home-decor-block-visible")    
            homeDecor.classList.remove("home-decor-block-hidden") 
            windowTitle.innerText = e.target.innerText
            document.querySelector(".home-decor-block-visible")
                .setAttribute("style", `margin-left: ${e.target.getBoundingClientRect().left}px`) 

            document.querySelector(".home-decor-block__links-first-column").innerHTML = ""
            document.querySelector(".home-decor-block__links-second-column").innerHTML = ""
            document.querySelector(".home-decor-block__links-third-column").innerHTML = ""
            if (numOfLinks < 8){
                categoryLinksInsert(0, numOfLinks, "first", linkNameList)
            }else if(numOfLinks > 8 && numOfLinks < 16){
                categoryLinksInsert(0, 8, "first", linkNameList)
                categoryLinksInsert(8, numOfLinks, "second", linkNameList)
            }else{
                categoryLinksInsert(0, 8, "first", linkNameList)
                categoryLinksInsert(8, 16, "second", linkNameList)
                categoryLinksInsert(16, numOfLinks, "third", linkNameList)
            }
        }
        xhr.send()    
        })

        setTimeout(() => {
            [header, wrapper].forEach(el => {
                el.addEventListener("mouseover", e => {
                    e.preventDefault();
                        homeDecor.classList.add("home-decor-block-hidden")
                        homeDecor.classList.remove("home-decor-block-visible")
                        document.querySelector(".home-decor-block__links-first-column").innerHTML = ""
                        document.querySelector(".home-decor-block__links-second-column").innerHTML = ""
                        document.querySelector(".home-decor-block__links-third-column").innerHTML = ""
                })
            })
        })
        
    })
}
