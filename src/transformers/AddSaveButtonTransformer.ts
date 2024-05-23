import { CheerioAPI } from "cheerio";
import CheerioTransformer from "./CheerioTransformer";

const saveButtonCss = `
    ._custom_navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 1vh;
        height: 5vh;
        background-color: #f8f9fa;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }

    ._custom_navbar button {
        font-size: 1.5vh;
        cursor: pointer;
    }
`

const saveButtonHtml = `
    <div class="_custom_navbar">
        <button id="save-button">Save</button>
    </div>
`

const saveButtonJs = (downloadFileName: string) => `
    <script>
        function saveFile() {
            $('textarea').each(function(index) {
                $(this).text($(this).val())
            })
            const html = document.documentElement.outerHTML;
            
            // https://stackoverflow.com/questions/13405129/create-and-save-a-file-with-javascript
            const blob = new Blob([html], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = '${downloadFileName}';

            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            URL.revokeObjectURL(url);
        }

        $(function() {
            $('#save-button').on('click', function() {
                saveFile();
            })
        });
    </script>
`

export default class AddSaveButtonTransformer implements CheerioTransformer {
    protected downloadFileName: string

    constructor(downloadFileName: string) {
        this.downloadFileName = downloadFileName
    }

    transform($: CheerioAPI): CheerioAPI {
        const firstCssBlock = $('style[type="text/css"]').first()
        $(firstCssBlock).text($(firstCssBlock).text() + saveButtonCss)

        $($('body').first()).prepend(saveButtonHtml)
        $('#notebook').css('margin-top', '5vh')

        $('head').first().append(saveButtonJs(this.downloadFileName))

        return $
    }
}