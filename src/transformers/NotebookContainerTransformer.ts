import { CheerioAPI } from "cheerio";
import CheerioTransformer from "./CheerioTransformer";

export default class NotebookContainerTransformer implements CheerioTransformer {
    transform($: CheerioAPI): CheerioAPI {
        $('#notebook-container').removeClass('container')
        return $
    }
}