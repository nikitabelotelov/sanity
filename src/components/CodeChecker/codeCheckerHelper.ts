export function codeChecker(code: number[], value: string) {
    const cleanValue = value.replace(/[\s+]/g, '')
    const valueArr: number[] = cleanValue.split('').map(el => Number.parseInt(el))
    for (let i = 0; i < valueArr.length; i++) {
        if (valueArr[i] !== code[i]) {
            return i
        }
    }
    return valueArr.length
}
