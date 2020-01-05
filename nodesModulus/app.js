const fs = require('fs');

fs.writeFileSync('notes.txt', 'This is a new content!')
fs.appendFileSync('notes.txt', 'This is an appended message')
