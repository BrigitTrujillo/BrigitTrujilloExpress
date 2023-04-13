const express = require('express')

const app= express()

const clientes =[
    {
       "_id":"1",
       "nombre":"Brigit",
       "apellido":"Trujillo",
       "email":"brigit@gmail.com"
    },
    {
       "_id":"2",
       "nombre":"erika",
       "apellido":"Varedes",
       "email":"erika@gmail.com"
    },
    {
       "_id":"1",
       "nombre":"verenice",
       "apellido":"Verde",
       "email":"verenice@gmail.com"
    },
    {
       "_id":"1",
       "nombre":"alexa",
       "apellido":"Blanco",
       "email":"alexa@gmail.com"
    }
 ]

app.get('/clientes', (req, res) => res.send(clientes))

