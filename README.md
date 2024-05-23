# Jupyter Notebook Restyler

This tool restyles the `.ipynb` notebook downloaded as `.html`. The current changes are implemented in the transformers (`src/transformers`):

- `NotebookContainerTransformer`: The notebook width is extended to the entire page
- `CleanCodeCellsTransformer` & `CleanTextCellsTransformer`: remove left blocks (with cells enumeration in case of code cells)
- `AddEditorTransformer`: the cell occupies 2/3 of the available space, while a textarea (e.g. for notes) fills the remaining space
- `AddSaveButtonTransformer`: adds a button in the top-left corner to download a possibly modified HTML, including the content of the textareas

---

## Usage

```
npm install
node dist/index.js folder/ipynb-file-name.html
```