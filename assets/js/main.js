const animationText = document.querySelector('.animation')

function typeWriter(e) {
  const textoArray = e.innerHTML.split('')
  e.innerHTML = ''
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      e.innerHTML += letra
    }, 75 * i)
  })
}


typeWriter(animationText)

// Hamburguer

const btnMobile = document.getElementById('btn-mobile')
const closeMenu = document.getElementById('close')
const navMenu = document.getElementById('nav')
const closeButtons = document.querySelectorAll('#close')

function toggleMenu() {
  navMenu.classList.toggle('active')
}

function closeMenuMobile() {
  navMenu.classList.remove('active')
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touch', toggleMenu)
closeMenu.addEventListener('click', closeMenuMobile)
closeButtons.forEach(link => link.addEventListener('click', closeMenuMobile))