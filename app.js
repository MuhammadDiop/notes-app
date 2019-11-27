const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.2.0')

//create
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler({title, body}) {
    notes.addNote(title, body)
  }
})

//remove
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler({title}) {
    notes.removeNote(title)
  }
})

//read
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler({title}) {
    notes.readNote(title)
  }
})

//list
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    notes.listNotes()
  }
})

yargs.parse()
