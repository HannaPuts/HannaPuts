const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const fetchData = async url => { const response = await fetch(url); return response.json(); }
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }

80 + 53,64

const fetchData = async url => { const response = await fetch(url); return response.json(); }
75 + 66
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
58,84,78,32,18,16,6,76,61,75,53,64,99,97,90,62,97,56,20,63,53,66,3,88,79,35,52,62,84,62,20,80,29,40,34,49,80,21,92,12,16,50,23,2,16,45,38,52,14,93,99,6,43,12,5,54,53,23,85,6,10,43,10,18,27,91,76,28,91,27,24,89,39,60,27,13,38,87,34,48,46,72,11,36,20,39,13,53,70,20,15,80,94,40,59,36 / 46

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

apple / false
const isEven = num => num % 2 === 0;
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
