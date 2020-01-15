function Algo() {}
Algo.prototype.reverse = function(str) {
    return str.split("")  // ["h", "a", "p", "p", "y", "", ]
    .reverse()  // [ "r", "e", "a", "y", "", "w", "e", "n",]
    .join(""); // "raey wen yppah"
};
Algo.prototype.isPalindrome = function(str) {
    return this.reverse(str) === str;
};
Algo.prototype.capitalize = function(str) {
    return str.split(" ").map(word => {
        const tempStr = word.toLowerCase();
        return tempStr.substring(0,1).toUpperCase() + tempStr.substring(1);
    }).join(" ");
};
module.exports = Algo;