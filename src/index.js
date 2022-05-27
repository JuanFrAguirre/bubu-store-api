const express = require('express')
const app = express()
const PORT = 3030 || process.env.PORT

const products = require('../data/products2')

app.get('/api', (req, res) => {
  res.send('todo ok!')
})

app.get('/api/products', (req, res) => {
  res.send(products)
})

app.get('/api/products/:id', (req, res) => {
  const id = req.params.id

  const product = products.find((product) => product.id === id)

  if (!product) res.sendStatus(401)
  res.send(product)
})

app.listen(PORT, () => {
  console.log(
    `\n------------------------\n
Server listening on PORT ${PORT}
\n------------------------`
  )
})
