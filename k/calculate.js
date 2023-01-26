// const operations = {
//     mySum: (sum1, sum2) => sum1 + sum2,
//     Min: (sum1, sum2) => sum1 - sum2,
//     Bagi: (sum1, sum2) => sum1 / sum2,
//     Kali: (sum1, sum2) => sum1 * sum2,
// }

// module.exports = operations;

const mySum = (sum1, sum2) => {
    return sum1 + sum2
}

const Min = (sum1, sum2) => {
    return sum1 - sum2
}

const Bagi = (sum1, sum2) => {
    return sum1 / sum2
}

const Kali = (sum1, sum2) => {
    return sum1 * sum2
}

module.exports = {
    mySum, Min, Bagi, Kali
}