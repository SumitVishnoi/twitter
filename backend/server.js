require("dotenv").config()
const { initSocket } = require("./sockets/server.socket")
const app = require("./src/app")
const connectToDB = require("./src/config/database")
const {createServer} = require("http")

const httpServer = createServer(app)

initSocket(httpServer)


connectToDB()

httpServer.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})