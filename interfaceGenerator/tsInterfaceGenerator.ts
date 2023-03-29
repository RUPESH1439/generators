export const getType = (obj:any, innerType = false, level = 1) => {

    let type = `interface Interface {\n`

    if (innerType) {
        type = `{\n`
    }

    Object.entries(obj).forEach(([key, val]) => {
        const _type = typeof val
        if (_type === 'object') {
            type += `${'\t'.repeat(level)}${key}: ${getType(val, true, level+1)}\n`
            return
        }
        type += `${'\t'.repeat(level)}${key}: ${_type}\n`
    })
    type += `${'\t'.repeat(level)}}`
    return type
}
