// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

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

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log(inventors.filter(v => v['year'] >= 1500 && v['year'] < 1600))

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
console.log(inventors.map(v => [v['first'], v['last']]))

// OR
console.log(inventors.map(v => `${v['first']} ${v['last']}`))


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const birthSort = [...inventors]
console.log(birthSort.sort((a, b) => a['year'] - b['year']))

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

console.log(Number(inventors.reduce((total, v) => total + (v['passed'] - v['year']), 0)))

// 5. Sort the inventors by years lived

//least to most
const leastYears = [...inventors]
console.log(leastYears.sort((a, b) => (a['passed'] - a['year']) - (b['passed'] - b['year'])))

// most to least
const mostYears = [...inventors]
console.log(mostYears.sort((a, b) => (b['passed'] - b['year']) - (a['passed'] - a['year'])));

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// I did not write this
fetch('./wiki.html')
    .then(function (response) {
        switch (response.status) {
            case 200:
                return response.text();
            case 404:
                throw response;
        }
    })
    .then(function (template) {
        // I did write this part
        const holder = document.createElement('div');
        holder.innerHTML = template;
        const boulevards = holder.querySelectorAll(".mw-category-group a");
        let names = [];
        boulevards.forEach(v => names.push(v.title));
        // this line is the actual filtering
        console.log(names.filter(v => v.includes("de")));


    })
    .catch(function (response) {
        console.log(response.statusText);
    });

// 7. sort Exercise
// Sort the people alphabetically by last name

console.log(people.sort());

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

console.log(data.reduce((acc, v) => {
    acc[v] = acc[v] ? acc[v] + 1 : 1;
    return acc;
}, {}));