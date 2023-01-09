const express = require('express')
const routes = express.Router()


let db = [
    { '1': { nome: 'pessoa 1', idade: '19' } },
    { '2': { nome: 'pessoa 2', idade: '18' } },
    { '3': { nome: 'pessoa 3', idade: '40' } },
    { '4': { nome: 'pessoa 4', idade: '29' } },
]

// buscar dados
routes.get('/', (req, res) => {
    return res.json(db)
})

// adicionar dados
routes.post('/add', (req, res) => {
    const body = req.body
    if (!body) {
        return res.status('vc precisa enviar os dados do body', 400).end()
    }
    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDb = db.filter(item => {
        if (!item[id]) {
            return item
        }
    })
    db = newDb

    return res.send(newDb)
})

module.exports = routes