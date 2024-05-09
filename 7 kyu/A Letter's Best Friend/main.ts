export function bestFriend(txt: string, a: string, b: string): boolean {
    let txtArray = txt.split("");
    for (let i = 0; i < txtArray.length; i++) {
        if (txtArray[i] === a && txtArray[i+1] !== b) {
            return false;
        }
    }
    return true;
}