const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/new', (req, res, next) => {
  // validate html
  // save to db
  //return success
  res.json('success!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})