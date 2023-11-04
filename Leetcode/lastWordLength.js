//Given a string s consisting of words and spaces, return the length of the last word in the string.

//A word is a maximal 
//substring
 //consisting of non-space characters only.

 var lengthOfLastWord = function(s) {
    let arr = s.split(' ');
    for(let i = arr.length; i > 0; i--) {
        if(arr[i]) {
            return arr[i].length;
        }
    }
};

console.log(lengthOfLastWord("   fly me   to   the moon  ") === 4 ? true : false);//Expect: 4
console.log(lengthOfLastWord("Hello World") === 5 ? true : false);//Expect: 5
console.log(lengthOfLastWord("luffy is still joyboy") === 6 ? true : false);//Expect: 6
