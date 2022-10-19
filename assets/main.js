const socket = io()
const messages = document.querySelector('.messages')
const form = document.querySelector('.form')
const input = document.querySelector('.input')
const nickName = document.querySelector('.nick-name')

const userName = prompt(`Ваше имя:`)
nickName.innerHTML = userName

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (input.value) {
    socket.emit('chat message', { message: input.value, name: userName })
    input.value = ''
  }
})

socket.on('chat message', (data) => {
  console.log(data)
  const item = document.createElement('li')
  item.classList.add('message')
  const name = document.createElement('span')
  name.innerHTML = data.name
  name.classList.add('name')
  item.appendChild(name)
  const text = document.createElement('p')
  text.innerHTML = data.message
  text.classList.add('text')
  item.appendChild(text)
  messages.appendChild(item)
})
