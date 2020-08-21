const sound = document.querySelector('.sound')
const btn = document.querySelector('.button')
const img = document.querySelector('.image')

// sound.addEventListener('play')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  sound.playing
  sound.play()
  btn.style = 'display:none;'
  img.style = 'display:block'
})
