
let windowTitle = document.querySelector(".home-decor-block__header-title")
let homeDecor = document.querySelector(".home-decor-block")

export default function() {
    document.querySelectorAll(".navbar-link a").forEach(element => {
        element.addEventListener("mouseover", e => {
        e.preventDefault();
        const xhr = new XMLHttpRequest()
    xhr.open("GET", `http://localhost:3000/api/links/${e.target.className.replace("navbar-link__", "")}.json`, true)
        xhr.onload = () => {
            let linkNameList = JSON.parse(xhr.responseText)
            let numOfLinks = Math.floor(Math.random() * (Object.keys(linkNameList).length + 1))
            console.log(numOfLinks)
            homeDecor.classList.add("home-decor-block-visible")    
            homeDecor.classList.remove("home-decor-block-hidden") 
            windowTitle.innerText = e.target.innerText
            document.querySelector(".home-decor-block-visible")
                .setAttribute("style", `margin-left: ${e.target.getBoundingClientRect().left}px`) 

            if (numOfLinks < 9){
                for (let i = 0; i < numOfLinks; i++) {
                    let linkKey = Object.keys(linkNameList)[i]
                    let linkHtmlString = `<li><a href="">${linkNameList[linkKey]}</a></li>`   
                    document.querySelector(".home-decor-block__links-first-column").innerHTML += linkHtmlString
                    delete linkNameList[linkKey]
                }
            }else if(numOfLinks > 9 && numOfLinks < 17){
                for (let i = 0; i < 9; i++) {
                    let linkKey = Object.keys(linkNameList)[i]
                    let linkHtmlString = `<li><a href="">${linkNameList[linkKey]}</a></li>`    
                    document.querySelector(".home-decor-block__links-first-column").innerHTML += linkHtmlString
                    delete linkNameList[linkKey]
                }
                for (let i = 9; i < numOfLinks - 8; i++) {
                    let linkKey = Object.keys(linkNameList)[i]
                    let linkHtmlString = `<li><a href="">${linkNameList[linkKey]}</a></li>`    
                    document.querySelector(".home-decor-block__links-second-column").innerHTML += linkHtmlString
                    delete linkNameList[linkKey]
                }
            }else{
                for (let i = 0; i < 9; i++) {
                    let linkKey = Object.keys(linkNameList)[i]
                    let linkHtmlString = `<li><a href="">${linkNameList[linkKey]}</a></li>`    
                    document.querySelector(".home-decor-block__links-first-column").innerHTML += linkHtmlString
                    delete linkNameList[linkKey]
                }
                for (let i = 9; i < 17; i++) {
                    let linkKey = Object.keys(linkNameList)[i]
                    let linkHtmlString = `<li><a href="">${linkNameList[linkKey]}</a></li>`    
                    document.querySelector(".home-decor-block__links-second-column").innerHTML += linkHtmlString
                    delete linkNameList[linkKey]
                }
                for (let i = 17; i < numOfLinks - 17; i++) {
                    let linkKey = Object.keys(linkNameList)[i]
                    let linkHtmlString = `<li><a href="">${linkNameList[linkKey]}</a></li>`    
                    document.querySelector(".home-decor-block__links-third-column").innerHTML += linkHtmlString
                    delete linkNameList[linkKey]
                }
            }
        }
        xhr.send()    
        })
        element.addEventListener("mouseout", e => {
            e.preventDefault();
                homeDecor.classList.add("home-decor-block-hidden")
                homeDecor.classList.remove("home-decor-block-visible")
                document.querySelector(".home-decor-block__links-first-column").innerHTML = ""
                document.querySelector(".home-decor-block__links-second-column").innerHTML = ""
                document.querySelector(".home-decor-block__links-third-column").innerHTML = ""
        })
    })
}
