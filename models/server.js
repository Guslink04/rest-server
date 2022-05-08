const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.searchPath = "/api/search"

        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(cors())
    }

    routes() {
        this.app.use(this.searchPath, require("../routes/search.route"))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto", this.port)
        })
    }
}

module.exports = Server