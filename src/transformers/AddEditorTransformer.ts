import { CheerioAPI } from "cheerio";
import CheerioTransformer from "./CheerioTransformer";

const cellWrapperHtml = `
<div data-cell-content style="flex: 2 1 66.67%;">
</div>
`

const textAreaHtml = `
<div style="flex: 1 1 33.33%;">
    <textarea style="width: 95%;height: 100%;margin-left: 5%;"></textarea>
</div>
`

export default class AddEditorTransformer implements CheerioTransformer {
    transform($: CheerioAPI): CheerioAPI {
        $('.cell').css('flex-direction', 'row')
        $('.cell').each(function (i, elem) {
            $(this).children().wrapAll(cellWrapperHtml)
            $('[data-cell-content]', this).after(textAreaHtml)
        })
        return $
    }
}