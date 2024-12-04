
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 *
 * @example - Two pointer
 */
var canMakeSubsequence = function (str1, str2) {
    let present = 0
    let j = 0
    for (let i = 0; i < str1.length && j <= str2.length; i++) {
        if (str1[i] === str2[j]) {
            j++
            present++
            continue
        }
        if (str1[i] === 'z' && str2[j] === 'a') {
            j++
            present++
            continue
        }
        if (String.fromCharCode(str1[i].charCodeAt(0) + 1) === str2[j]) {
            j++
            present++
        }
    }
    return present === str2.length
};

console.log(canMakeSubsequence("abc", "ad"))
console.log(canMakeSubsequence("zc", "ad"))
console.log(canMakeSubsequence("ab", "d"))
console.log(canMakeSubsequence("oh", "hu"))