export function doubleChar(str: string): string {
    return str.split('').map((char) => char + char).join('');
}