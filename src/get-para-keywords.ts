import * as _ from 'lodash'

// tslint:disable-next-line:no-any
export default async function (client: any, para: string): Promise<string[]> {
    // tslint:disable-next-line:no-any
    const items: string[] = (await client.lexer(para)).results.items.filter((x: any) => x.pos === 'n').map((x: any) => x.item)
    return _.take(items, 6)
}
