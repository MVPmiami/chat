const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
/*const Discord = require('discord.js')
const webhook = new Discord.WebhookClient({
  id: '1032186334607056986',
  token: 'aaWd39Z7olcW1nk4i2RQnZM9KZT1lukhtdMVfTus3T1Vlc7aNLhdSH0M8sGl8qDISM_3',
})*/
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
//webhook.send('hi')

app.use(express.static(__dirname + `/assets`))

app.use('/', (req, res) => {
  res.sendFile(__dirname + `/index.html`)
})

io.on('connection', (socket) => {
  socket.on('chat message', (data) => {
    io.emit('chat message', {
      message: data.message,
      name: data.name,
    })
    //webhook.send(`${data.name} : ${data.message}`)
  })
})

http.listen(3000, () => {
  console.log('server running on 3000 port lol kek')
})
