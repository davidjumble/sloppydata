const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.set('X-full-stack', '4life')
  res.status(418)
  res.send('sloppy   ! modified')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})





  ``