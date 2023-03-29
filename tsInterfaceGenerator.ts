const testObj = {
    x: 'hello',
    y: 'world',
    z: 2,
    a: {
        b: 'sdsf',
        c: 232,
        d: true,
        e: {
            t: true
        }
    }
}

const getVariableName = (variable: any) => Object.keys({
    testObj
})[0]

const getType = (obj, innerType = false, level = 1) => {

    let type = `interface I${getVariableName(obj)} {\n`

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
