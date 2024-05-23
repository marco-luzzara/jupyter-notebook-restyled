import { CheerioAPI } from "cheerio";

export default interface CheerioTransformer {
    transform($: CheerioAPI): CheerioAPI;
}