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