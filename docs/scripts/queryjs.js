const navItems = document.getElementById('items-nav')
window.addEventListener("resize", () => scriptQueryChange())

function scriptQueryChange() {
    const mobileExist = document.getElementById('mobile')
    if(window.innerWidth < 700 && !mobileExist) {
        const script = document.createElement('script')
        script.type = 'text/javascript';
        script.src = 'docs/scripts/mobile.js';
        script.id = 'mobile';

        const tag = document.getElementsByTagName('script')[0]
        navItems.classList.add('hide')
        tag.parentNode.insertBefore(script, tag)
    } if (window.innerWidth > 700 && mobileExist) {
        mobileExist.remove()
        navItems.classList.remove('hide')
    }
}