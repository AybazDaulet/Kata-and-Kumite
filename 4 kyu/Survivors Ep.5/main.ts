// export function survivors(arr: string[]): string {
//     arr = arr.map((str) => {return str==="" ? " " : str}).join('').split(" ");
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].slice(0, -(arr[i+1].length - 1));
//         arr[i+1] = arr[i].slice(0, -(arr[i+1].length - 1))
//     }
// }

export function survivors(arr: string[]): string {
    let group: string = '';
    let groups: string[] = [];
    for (let y = 0; y < arr.length; y++) {
        if (arr[y] == '') {
            groups.push(group);
            group = '';
        };
        for (let x = 0; x < arr[y].length; x++) {
            if (group.match(/[a-z]/)) group += arr[y][x];
            if (arr[y][x] == " " && !group.includes(' ')) {
                groups.push(group);
                group = " ";
            } else if (arr[y][x] == " " && group.includes(' ')) {
                group += " ";
            }
        }
    }
}