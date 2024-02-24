/* reverse string function */
function reverseString (str) {
  let newString = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i]
  }

  return console.log(newString)
}
/* appel function */
reverseString('hello')

/* counting function */
function count (str) {
  let count = 0

  for (let i = 0; i < str.length; i++) {
    count++
  }

  console.log(count)
}
count('Hello,world!')

/* function that capitalizes the first letter of each word in a sentence. */

function firstcap (mySentence) {
  let words = mySentence.split(' ')

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1)
  }

  console.log(words.join(' '))
}
/* appel function */
firstcap('the first letter of each word in a sentence.')

/* Maximum and Minimum function */
function maxmin (arr) {
  let max = arr[0]
  let min = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    } else if (arr[i] > max) {
      max = arr[i]
    }
  }
  console.log(`min is ${min} and max is ${max}`)
}
/* appel function  */
maxmin([10, 20, 14, 2, 3, 6, -5])

/* sum of element function */
function sum (arr) {
  let s = 0
  for (i = 0; i < arr.length; i++) {
    s += arr[i]
  }
  console.log(`the sum of all elements is ${s}`)
}
/* appel function sum */
sum([15, 6, 2, 3])

/* filter positive numbers */

function filter (arr) {
  let j = 0
  let pos = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos[j] = arr[i]
      j++
    }
  }
  console.log(pos)
}

/* appel function */

filter([-1, 12, 15, 3])
/* factoriel fuction */
function factoriel (n) {
  let i = n
  let f = 1
  do {
    f *= i
    i--
  } while (i > 0)

  console.log(f)
}
/* appel function  */
factoriel(10)

/* prime function */

function checkPrime (num) {
  let res = true
  if (num <= 1) {
    res = false
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      res = false
      break
    }
  }
  if (res) {
    console.log(num, ' is a prime number.')
  } else {
    console.log(num, ' is not a prime number.')
  }
}
/* appel function */
checkPrime(4)
checkPrime(5)

/* fuction Fibonacci */
function helperFibonacci (n) {
  let number1 = 0
  let number2 = 1

  for (i = 0; i < n - 1; i++) {
    let current = number1 + number2
    number1 = number2
    number2 = current
  }
  console.log(number2)
}
/*  appel function */

helperFibonacci(18)
