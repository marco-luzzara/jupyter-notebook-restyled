import { CheerioAPI } from "cheerio";
import CheerioTransformer from "./CheerioTransformer";

export default class CleanTextCellsTransformer implements CheerioTransformer {
    transform($: CheerioAPI): CheerioAPI {
        $('.text_cell > .prompt').remove()
        return $
    }
}