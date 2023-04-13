const express = require('express')

const app= express()

app.get('/clientes', (req,res)=>{
    res.sendFile('./static/index.html',{
        root: __dirname
    })
})

app.get('/produtos', (req,res)=>{
    res.sendFile('./static/productos.html',{
        root: __dirname
    })
})

app.listen(9000)
console.log(`Server on post ${9000}`)