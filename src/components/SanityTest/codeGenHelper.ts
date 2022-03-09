export function generateCode(len: number) {
    const code: number[] = []
    for(let i = 0; i < len; i++) {
        const digit = Math.floor((Math.random() * 10) % 10)
        code.push(digit)
    }
    return code
}