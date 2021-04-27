document.querySelector('.button-nav-mobile')
    .addEventListener('click', () => {
        document.querySelector('.header-navbar-mobile')
            .classList.toggle('flex')
    })

document.querySelector('.header-navbar-mobile')
    .addEventListener('mouseleave', (event) => {
        event.currentTarget.classList.toggle('flex')
    })
    
window.addEventListener('resize', () => {
    if(window.innerWidth > 656) {
        if(document.querySelector('.header-navbar-mobile').classList.contains('flex'))
            document.querySelector('.header-navbar-mobile').classList.remove('flex')
    }
})