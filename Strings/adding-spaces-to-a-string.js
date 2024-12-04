/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 *
 * @example - Two pointer
 */
var addSpaces = function (s, spaces) {
    let ans = ""
    let j = 0
    for (let i = 0; i < s.length; i++) {
        if (i === spaces[j]) {
            ans += " "
            j++
        }
        ans += s[i]
    }
    return ans
};

console.log(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]))

console.log(addSpaces("icodeinpython", [1, 5, 7, 9]))