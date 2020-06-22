
let modalOverlay = document.querySelector (".modal-overlay") 
let cards = document.querySelectorAll (".card")
let modal = document.querySelector (".modal") 

for (let card of cards) {
card.addEventListener ("click",  () => {
    let videoId = card.getAttribute ("id")
    modalOverlay.classList.add ("active")

    modalOverlay.querySelector ("iframe").src = `https://rocketseat.com.br/${videoId}`
} 
)}


document.querySelector (".close").addEventListener ("click", () => {
        modalOverlay.classList.remove ("active")
        modalOverlay.querySelector ("iframe").src = ""
        modal.style.width = "90%"
        modal.style.height = "90%"
        modal.style.margin = "5vh auto"
    })


    let maximizeButton = document.querySelector (".maximize")
      
        maximizeButton.addEventListener ("click", () => {
            modal.style.width = "100%"
            modal.style.height = "100%"
            modal.style.margin = "0"
        }) 

        maximizeButton.classList.contains (".maximize")




