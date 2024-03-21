const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
let result = performOperation(getRandomNumber(), getRandomNumber());
orange

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const filterEvenNumbers = numbers => numbers.filter(isEven);
let array = getRandomArray(); array.forEach(item => console.log(item));

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
apple - grape
function addNumbers(a, b) { return a + b; }
