import { CheerioAPI } from "cheerio"
import CheerioTransformer from "./CheerioTransformer"

export function applyMany<TTransformer extends CheerioTransformer>(cheerioAPI: CheerioAPI, transformers: TTransformer[]): CheerioAPI {
    let result = cheerioAPI

    for (const transformer of transformers) {
        result = transformer.transform(result)
    }

    return result
}