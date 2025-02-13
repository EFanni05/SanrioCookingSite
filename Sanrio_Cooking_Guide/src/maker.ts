interface find{
    itemone: string;
    itemtwo: string;
    result: string;
}

export function maker(item: string, item2: string) {
    let find:find = {
        itemone: item,
        itemtwo: item2,
        result: ''
    }
    //finder function
   return find
}