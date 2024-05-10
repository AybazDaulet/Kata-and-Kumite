export function bestFriend(txt: string, a: string, b: string): boolean {
    return txt
        .split('')
        .every((char, index, txtArray) => char === a ? txtArray[index + 1] == b : true);
}   
