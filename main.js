const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

const pessoa = {

  name: 'mayk',
  age: 37,
  falar: function(){
    alert(pessoa.name)
  }
}

pessoa.falar()

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
