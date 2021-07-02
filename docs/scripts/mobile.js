const btn = document.getElementById('hm-menu')
const item = document.getElementById('items-nav')

btn.addEventListener('click', () => displayMenu())

let state;
function displayMenu() {
  if(state === 1) {
    item.classList.add('hide')
    state = 0;
  } else {
    item.classList.remove('hide')
    state = 1;
  }
}