import { CheerioAPI } from "cheerio";
import CheerioTransformer from "./CheerioTransformer";

export default class CleanCodeCellsTransformer implements CheerioTransformer {
    transform($: CheerioAPI): CheerioAPI {
        $('.code_cell > .input > div:first-child').remove()
        $('.code_cell > .output_wrapper > .output > .output_area > .prompt').remove()
        return $
    }
}