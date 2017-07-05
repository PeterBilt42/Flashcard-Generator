var ClozeGenerator = function(text, cloze) {

  this.fulltext = text;
  this.cloze = cloze;

  this.partial = function() {
    var partial = [];
    var word = text.split(" ");

    var newString = this.fulltext;
    var repString = newString.replace(this.cloze, "...")

    // if (this.cloze !== partialCloze) {
    //   console.log("Error - Incorrect Cloze Format");
    // }
    // else {console.log(partialText);}

    return repString; 
  };

};

var firstPresidentCloze = new ClozeGenerator("George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze.cloze); 

console.log(firstPresidentCloze.partial()); 

// console.log(firstPresidentCloze.fullText);

// var brokenCloze = new ClozeGenerator("This doesn't work", "oops");

module.exports = ClozeGenerator;