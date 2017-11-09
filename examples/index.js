import helloWorld from 'twitter:928483303962714112'
import leftPad from 'twitter:712799807073419264'

console.log(helloWorld()) // hello wolrd

console.log(leftPad(1, 5)) // '00001'
console.log(leftPad(1234, 5)) // '01234'
console.log(leftPad(12345, 5)) // '12345'
