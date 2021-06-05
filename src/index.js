import Header from './templates/Header.js'

window.addEventListener("load", function() {
    const nav = document.getElementById('nav');
    const button = document.getElementById('button');
    
    nav.innerHTML = Header()

    function viewMenu() {
        nav.classList.add('hide')
    }
    function hideMenu() {
        nav.classList.remove('hide')
    }
    button.addEventListener('click', () => {
        let state = false
        if(state === true) {
            hideMenu()
            state = true
        } else {
            state = false
            viewMenu()
        }
    })
})