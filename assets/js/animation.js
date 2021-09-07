// ==================== Texto =================== 

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

// ==================== Scroll Suave ===================

const menuItems = document.querySelectorAll('.oi a');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
  console.log(item)
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  console.log(id)
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 150;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  // window.scroll({
  //   top: to,
  //   behavior: "smooth",
  // });
  smoothScrollTo(0, to);
}


/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
 function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 120); // 60 fps
};