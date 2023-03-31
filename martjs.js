
const day = document.querySelector('.sky-day')
const night = document.querySelector('.sky-night')
const moon = document.querySelector('.moon')
const sun = document.querySelector('.sun')
const btn = document.querySelector('button')

btn.addEventListener('click',() => {
  night.classList.toggle('sky-night')
  moon.classList.toggle('moon')
  // btn.textContent = 'Включите ночь'
  if(btn.textContent === 'Включите день') {
    btn.textContent ="Включите ночь"
  } else {
    btn.textContent = 'Включите день'
  }
})

