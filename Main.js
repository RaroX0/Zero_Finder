const ZeroFinder = require("./ZeroFinder")
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout })

readline.question("Please Enter a Number: ", (input) => {
    if (ZeroFinder(input)) {
        console.log("Input Contains Zero.")
    } else {
        console.log("Input contains no zero.")
    }
})