const barsBtn = document.querySelector('.hamburger')
const navList = document.querySelector('.nav__links')

const handleNav = () => {
    barsBtn.classList.toggle('is-active')
    navList.classList.toggle('show-nav')
}

barsBtn.addEventListener('click', handleNav)