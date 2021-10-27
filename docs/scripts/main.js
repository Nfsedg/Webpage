const proyects = document.querySelector(".proyects__info--timetrackig")
const modals = document.querySelector(".modal")
const button = document.querySelector(".button")

proyects.addEventListener('click', openModal)

function openModal() {
    modals.classList.remove('hideModal')
    modals.classList.add('show-modal')
}


button.addEventListener('click', closeModal)

function closeModal() {
    modals.classList.remove('show-modal')
    modals.classList.add('hideModal')
}