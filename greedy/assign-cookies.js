/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (greed, cookie) {
    greed.sort((a, b) => a - b)
    cookie.sort((a, b) => a - b)

    let ans = 0
    let j = 0

    for (let i = 0; i < cookie.length; i++) {
        if (cookie[i] >= greed[j]) {
            ans++
            j++
        }
    }
    return ans
};

console.log(findContentChildren([1, 3, 2], [1, 1]))
console.log(findContentChildren([1, 2], [1, 2, 3]))

console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]))