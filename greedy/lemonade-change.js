/**
 * @param {number[]} bills
 * @return {boolean}
 * @example - Greedy algos
 */
var lemonadeChange = function (bills) {
    let fives = 0, tens = 0;

    for (let i = 0; i < bills.length; i++) {
        // $5 dollar bill
        if (bills[i] === 5) {
            fives += 1
        } else if (bills[i] === 10) { // $10 dollar bill
            if (fives) {
                tens += 1
                fives -= 1
            } else {
                return false
            }
        } else { // %20 dollar bill
            if (fives && tens) {
                fives -= 1
                tens -= 1
            } else if (fives > 1) {
                fives -= 3
            } else {
                return false
            }
        }
    }
    return true
};

// console.log(lemonadeChange([5, 5, 5, 10, 20]))
// console.log(lemonadeChange([5, 5, 10, 10, 20]))
console.log(lemonadeChange([5, 5, 5, 10, 5, 5, 10, 20, 20, 20]))