const nome = prompt('Digite seu nome completo --> ').trim()

const array = nome.split(' ')
const print = `Ola ${array[0]} ${array[array.length - 1]}!`
console.log(print)