const navbarEl = document.querySelector('.navbar');

const bottomContainerEl = document.querySelector('.bottom-container');

console.log(bottomContainerEl.offsetTop); // thats How I found the correct numbers for my eventListener method.

window.addEventListener('scroll', () => {
  if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50) {
    navbarEl.classList.add('active')
  } else {
    navbarEl.classList.remove('active')
  }
});

