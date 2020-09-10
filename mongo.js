/* eslint-disable no-unused-vars */
const mongoose = require('mongoose')

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
`mongodb+srv://db_wizard_38:${password}@fso-phonebook-madness.9nsh6.mongodb.net/phonebook?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name,
  number,
})

const printPhonebook = () => {
  Person
    .find({})
    .then(people => {
      console.log('phonebook:')
      people.forEach(person => {
        console.log(person.name, person.number)
      })
      mongoose.connection.close()
    })
}

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
} else if (process.argv.length === 3) {
  printPhonebook()
} else {
  person.save().then(result => {
    console.log('added ' + name + ' number ' + number + ' to phonebook')
    mongoose.connection.close()
  })
}