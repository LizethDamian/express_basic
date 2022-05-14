const express = require('express')

const app = express()

const port = 3000

// https://localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} `)
})

//Agregando una nueva ruta 
// https://localhost:3000/launchX

app.get('/launchX', (req, res) => {
    res.send('Bienvenidos a launchX')
})

//Agregar una nueva ruta y regresar un objeto
// https://localhost:3000/explorersInNode

app.get('/explorersInNode', (req, res) => {
    const explorer = { name: "Lizeth Damian", msg: "Hello" }
    res.send(explorer)
})

// Agregar una nueva ruta que reciba Querty Params
// http://localhost:3000/explorers/LizethDamian

app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

//ctrl + c para cerrar el server y 
// node app.js para correr el server