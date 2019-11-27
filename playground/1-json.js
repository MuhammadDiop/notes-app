const fs = require('fs')

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday'
}

const dataBuffer = fs.readFileSync('1-json.json')
let dataJSON = dataBuffer.toString()
let data = JSON.parse(dataJSON)
data.name = 'Mohamed'
data.planet = 'Mars'
data.age = 21

dataJSON = JSON.stringify(data)

fs.writeFileSync('1-json.json', dataJSON)
