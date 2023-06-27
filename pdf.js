const pdf = require('pdfkit');
const fs = require('fs')
const newpdf = new pdf();
//create a new pdf amd createfilestream to add document
newpdf.pipe(fs.createWriteStream('file.pdf'))
newpdf.end()