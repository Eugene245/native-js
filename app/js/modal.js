let modalButton = document.querySelector(".button-modal")
        let modal = document.querySelector(".modal")
        let close = document.querySelector(".modal-close")


        export default function() {
            modalButton.addEventListener("click", e => {
                e.preventDefault();
                modal.style.display = "block";
            })
    
            close.onclick = () => {
                modal.style.display = "none";
            }
    
            window.onclick = e => {
                if (e.target == modal) {
                    modal.style.display = "none";
                }
            }
        }