import distributeBlocks from '../js/distribute.js'

export default function() {
  document.querySelectorAll(".navbar-link a").forEach(element => {
    element.addEventListener("click", e => {
      e.preventDefault();
      let name = e.target.className.replace("navbar-link__", "")
      let state = {page: name}
      let title = 'Hello World';
      let url = `${name}`;
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.querySelector(".breadcrumb").children[2].innerHTML = `<a href=""><span>${name}</span></a>`
          document.querySelector(".breadcrumb").children[3].innerHTML = ""
          document.querySelector(".breadcrumb").children[4].innerHTML = ""
          document.querySelector(".home-blocks__first-line").innerHTML = ""
          document.querySelector(".home-blocks__first-column").innerHTML = ""
          document.querySelector(".home-blocks__second-column").innerHTML = ""
          distributeBlocks(name)
        }
      };
      xhr.open("GET", `http://localhost:3000/api/links/${name}.json`, true);
      xhr.send();
      history.pushState(state, title, url)
    })
  })
  
  
}

