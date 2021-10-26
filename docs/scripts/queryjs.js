const btn = document.getElementById('hm-menu')
const navItems = document.getElementById('items-nav')

let state;

btn.addEventListener('click', displayMenu)


function displayMenu() {
    if(window.innerWidth < 700) {
        navItems.classList.add('hide')
        if(state === 1) {
            navItems.classList.add('hide')
            state = 0;
          } else {
            navItems.classList.remove('hide')
            state = 1;
          }

    } else if (window.innerWidth > 700) {
        navItems.classList.remove('hide')
    }
}