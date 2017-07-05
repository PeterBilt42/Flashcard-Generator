var ClozeGenerator = require('./ClozeCard.js');

console.log(ClozeGenerator);

var BasicGenerator = function(front,back) {
	this.front = front;
	this.back = back;

}

var firstPresident = new BasicGenerator("Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front);

console.log(firstPresident.back);

module.exports = BasicGenerator;