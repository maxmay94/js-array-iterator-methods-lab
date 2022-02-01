// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.prototype.filter()
// 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's.
let invent1500 = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
console.log(`Problem 1: born in 1500's`)
console.log(invent1500)

// Array.prototype.map()
// 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties.

let firstLast = inventors.map(inventor => ({first:inventor.first, last:inventor.last}))

console.log(`Problem 2: firstLast`)
console.log(firstLast)

// 3. Sort the inventors by birthdate, from those born furthest in the past to those born most recently.

let birthdays = inventors.sort((inventor1, inventor2) => {
  return inventor1.year - inventor2.year
})

console.log(`Problem 3: sort by birthday`)
console.log(birthdays)


// 4. Sort the inventors by years lived from shortest to longest-lived.

let life = inventors.sort((inventor1, inventor2) => {
  return (inventor1.passed - inventor1.year) - (inventor2.passed - inventor2.year)
})

console.log(`Problem 4: sort by lifespan`)
console.log(life)

// Array.prototype.reduce()
// 5. Find how many years all the inventors lived combined.

let totalYears = inventors.reduce(function(prev, inventor) {
  return prev + (inventor.passed - inventor.year)
}, 0)

console.log(`Problem 5: combined years`)
console.log(totalYears)


const people = [
  'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
  'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
  'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
  'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
  'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
  'Blake, William'
];

// Array.prototype.map()
// 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".

let firstLast2 = people.map(function(person) {
  nameArry = person.split(', ')
  return  `${nameArry[1]} ${nameArry[0]}`
  //return {First:nameArry[1], Last: nameArry[0]} 
})
console.log('Problem 6: People Map')
console.log(firstLast2)



const data = [
  'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
  'bike', 'walk', 'car', 'van', 'car', 'truck'
];

// Array.prototype.reduce()
// 7. Count the number of instances for each of the data items.
// Hint: Return an object where the keys are 'car', 'truck', etc., and the value is the total number of times each data item appears.
let cars = 0
let trucks = 0
let bikes = 0
let vans = 0
let feet = 0

let vehicles = data.reduce(function(prev, next) {
  if(next === 'car') {
    cars++
  } else if(next === 'truck') {
    trucks++
  } else if(next === 'bike') {
    bikes++
  } else if(next === 'van') {
    vans++
  } else {
    feet++
  }

  return {car: cars, truck: trucks, bike: bikes, van: vans, walk: feet}
}, 0)

console.log('Problem 7: count transport')
console.log(vehicles)


const devs = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

// Array.prototype.some()
// 8. Check if at least one person is 19 or older.
let today = new Date()
let one19 = devs.some(dev => (today.getFullYear() - dev.year) >= 19)
console.log('Problem 8: one 19')
console.log(one19)

// Array.prototype.every()
// 9. Check if everyone is 19 or older.

let all19 = devs.every(dev => (today.getFullYear() - dev.year) >= 19)
console.log('Problem 9: All 19')
console.log(all19)

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.find()
// 10. Find the comment with the id of 823423.
let commentId = comments.find(comment => comment.id ===823423)
console.log('Problem 10: find comment by ID')
console.log(commentId)


// Array.prototype.findIndex()
// 11. Find the index of the comment with an id of 123523.

let commentIndx = comments.findIndex(comment => comment.id === 123523)
console.log('Problem 11: find comment index')
console.log(commentIndx)