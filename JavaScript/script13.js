function filterPositive(arr) {
    return arr.filter(num => num > 0);
}

const mixedNumbers = [-3, 5, -1, 7, 0, -8, 10];
console.log(filterPositive(mixedNumbers));  

function findDuplicates(arr) {
    let duplicates = [];
    let seen = new Set();
    let added = new Set();
    
    for (let num of arr) {
        if (seen.has(num) && !added.has(num)) {
            duplicates.push(num);
            added.add(num);
        }
        seen.add(num);
    }
    
    return duplicates;
}

const data = [1, 2, 3, 4, 2, 3, 5, 6, 1];
console.log(findDuplicates(data));  
// [1, 2, 3]



function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

const originalArray = [1, 2, 3, 4, 5];
console.log(shuffleArray(originalArray));  



