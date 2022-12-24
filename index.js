const express = require ('express')
const cors = require('cors')
const app = express()
const fs = require('fs')
const fsPromises = require('fs').promises;


app.listen(3000, console.log("¡Servidor encendido"))
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/canciones", async (req, res) => {
    const repertorios = JSON.parse(await fsPromises.readFile("./repertorio.json" , 'utf8'));
    res.json(repertorios) 
})

