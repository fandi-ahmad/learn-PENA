const { mySum, Min, Bagi, Kali } = require('./calculate')

const readline = require('readline').
createInterface({
    input: process.stdin,
    output: process.stdout
})

let num1 = null
let num2 = null
const operations = {
    "+": (num1, num2) => mySum(num1, num2),
    "-": (num1, num2) => Min(num1, num2),
    "/": (num1, num2) => Bagi(num1, num2),
    "*": (num1, num2) => Kali(num1, num2)
}

readline.question('Angka pertama? ', input1 => {
    num1 = parseInt(input1)

    readline.question('Angka kedua? ', input2 => {
        num2 = parseInt(input2)

        readline.question('calculate ', input3 => {
            // console.log(operations[input3] ? operations[input3](num1, num2) : "perintah salah")
            if (input3 == '+') {
                console.log(mySum(num1, num2))
            } else if (input3 == '-') {
                console.log(Min(num1, num2))
            } else if (input3 == '/') {
                console.log(Bagi(num1, num2))
            } else if (input3 == '*') {
                console.log(Kali(num1, num2))
            } else {
                console.log('perintah salah')
            }
            readline.close()
        })

    })

})
