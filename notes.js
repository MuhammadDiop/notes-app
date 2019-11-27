const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return 'Your notes...'
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find(note => note.title === title)

  if(!duplicateNote) {
    notes.push({
      title,
      body
    })
    saveNotes(notes)
    console.log('\n', chalk.green.inverse('New note added!'), '\n')
  } else {
    console.log('\n', chalk.red.inverse('Note title taken.'), '\n')
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const filteredNotes = notes.filter(note => note.title !== title)

  if(filteredNotes.length === notes.length) {
    console.log('\n', chalk.red.inverse("No note found."), '\n')
  } else {
    saveNotes(filteredNotes)
    console.log('\n', chalk.green.inverse("Note successfully removed!"), '\n')
  }
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find(note => note.title === title)
  if(note) {
    console.log(chalk.yellow.inverse('Here is your note:'))
    console.log(chalk.yellow('\n\t', 'Title :', note.title, '\n\t', 'Body :', note.body))
  } else {
    console.log('\n', chalk.red.inverse('No note found.'), '\n')
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.yellow.inverse('Here are your notes:'))
  notes.forEach((note, i) => console.log(chalk.yellow('\n\t', i+1+'.' ,'Title :', note.title, '\n\t', 'Body :', note.body)))
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch(e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote,
  listNotes: listNotes,
}
