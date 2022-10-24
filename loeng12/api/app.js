const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Tere, maailm!')
})

app.post('/liida', (req, res) => {
    console.log('liidame!!');
    res.send('summa')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

