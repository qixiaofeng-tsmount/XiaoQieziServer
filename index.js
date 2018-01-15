const app = require('express')()
const appPort = 3002

app.get('/', (req, res) => {
  res.json({hello:'world'})
})

app.listen(appPort, () => {
  console.log(`Server listening ${appPort}.`)
})
