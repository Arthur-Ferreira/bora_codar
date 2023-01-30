const button = document.querySelector('#btn-360')
const buttonClose = document.querySelector('#btn-close')

button.addEventListener('click', spinProduct)
buttonClose.addEventListener('click', spinProduct)

function spinProduct() {
  document.documentElement.classList.toggle("animated")
}