const express = require('express')

const app= express()

const clientes =[
    {
       "_id":"1",
       "nombre":"DELL",
       "marca":"DELL",
       "precio":"$12.78"
    },
    {
        "_id":"2",
        "nombre":"DELL",
        "marca":"DELL",
        "precio":"$12.78"
    },
    {
        "_id":"3",
        "nombre":"DELL",
        "marca":"DELL",
        "precio":"$12.78"
    }

 ]
app.get('/productos', (req, res) => res.clientes)
