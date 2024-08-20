function getCharCount(word) {
    const count = {};
    for (const char of word) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

function LetterCount(str) {

    const words = str.split(/\s+/);
    let maxCount = 0;
    let varOcg = -1;

    for (const word of words) {
        const cleanWord = word.replace(/[^a-zA-Z]/g, '');
        const charCount = getCharCount(cleanWord);
        const maxLetterCount = Math.max(...Object.values(charCount));

        if (maxLetterCount > 1 && maxLetterCount > maxCount) {
            maxCount = maxLetterCount;
            varOcg = cleanWord;
        }
    }
    console.log("varOcgvarOcg", varOcg)
    return varOcg === -1 ? -1 : varOcg;
}

// Example usage:
console.log(LetterCount("Hello apple pie"));