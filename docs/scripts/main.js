const proyects = document.querySelectorAll(".proyects__info")

proyects.forEach(element => {
    element.addEventListener('click', () => {
        openModal(element.id)
    })
    
});
// In HTML document the first node on the page on My Proyects must be the image and title displayed on the webpage
function openModal(id) {
    let modalArray = document.querySelectorAll(`#${id}`)
    let modal = modalArray[1]

    console.log(modal)
    let localButton = modal.childNodes[1].childNodes[1]
    localButton.addEventListener('click', () => closeModal(id))

    if(modal) {
        modal.classList.remove('hideModal')
        modal.classList.add('show-modal')
    } else { 
        console.warn("Modal doesn't exist")
    }
}

function closeModal(id) {
    let modal = document.querySelectorAll(`#${id}`)
    modal[1].classList.remove('show-modal')
    modal[1].classList.add('hideModal')
}
