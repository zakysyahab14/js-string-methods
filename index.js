let newName = prompt("insert your full name to know how much later there");
console.log(newName.length)
alert(newName.length)

const text = newName
let A = prompt("number of latter u want to know inside your name start from 0")
console.log(text.toUpperCase()[A])
alert(text.toUpperCase()[A])

confirm("spelling the name")
for (const char of newName) {
    console.log(char)
}

let partName = prompt("find part of your name here")
console.log(text.indexOf(partName))
alert(text.indexOf(partName))


let guestList = 'Guests:\n * Alpha\n * Beta\n * Gamma'
console.log(guestList)