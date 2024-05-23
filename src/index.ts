import * as cheerio from 'cheerio';
import * as fs from 'node:fs'
import * as path from 'path'
import * as TransformUtils from './transformers/TransformUtils'
import CleanCodeCellsTransformer from './transformers/CleanCodeCellsTransformer';
import NotebookContainerTransformer from './transformers/NotebookContainerTransformer';
import CleanTextCellsTransformer from './transformers/CleanTextCellsTransformer';
import AddEditorTransformer from './transformers/AddEditorTransformer';
import AddSaveButtonTransformer from './transformers/AddSaveButtonTransformer';

const filePath = process.argv[2];
const fileDir = path.dirname(filePath)
const fileName = path.basename(filePath)

let fileContent = fs.readFileSync(filePath)

const $ = cheerio.load(fileContent);

let cheerioTransformed = TransformUtils.applyMany($, [
    new AddSaveButtonTransformer(fileName),
    new NotebookContainerTransformer(),
    new CleanTextCellsTransformer(),
    new CleanCodeCellsTransformer(),
    new AddEditorTransformer()
])

// `test/file.html` -> `test/file-new.html`
const modifiedFilePath = `${fileDir}/${fileName.substring(0, fileName.length - 5)}-new.html`

// console.log($($('.inner_cell').get(0)).text())
fs.writeFileSync(modifiedFilePath, cheerioTransformed.html())