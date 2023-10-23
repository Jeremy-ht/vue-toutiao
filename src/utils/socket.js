const sockets = {}
sockets.init = function (name, id, roomId) {
  this.socket.on('connect', function () {
    console.log('websocket连接成功')
  })
  this.socket.on('disconnect', function () {
    console.log('websocket已经下线')
  })
}

sockets.getSocket = function (roomId, that) {
  return this.socket
}
export default sockets
