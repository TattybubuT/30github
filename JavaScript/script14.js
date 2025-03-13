function chatBot(words, query) {
    query = query.toLowerCase();
    let matches = words.filter(word => word.toLowerCase().startsWith(query));
    return matches.length ? matches.sort() : "Совпадений не найдено";
}

const wordsList = ["apple", "banana", "apricot", "avocado", "berry", "blueberry"];

console.log(chatBot(wordsList, "ap"));  
console.log(chatBot(wordsList, "b"));   
console.log(chatBot(wordsList, "z"));   
