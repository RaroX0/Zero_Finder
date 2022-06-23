const findZero = (input) => {
    if (input == 0) return true
    if (input < 0) input = -input
    while (input > 0) {
        if (input % 10 == 0) return true
        input /= 10
    }
    return false
}

module.exports = findZero