const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fileName = "public/StrangerThings.html"
const fullPath = __dirname + "/" + fileName

app.use(express.static(__dirname + '/public')); 

app.get('/', (req, res) => {
  res.sendFile(fullPath)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})