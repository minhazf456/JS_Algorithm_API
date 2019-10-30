// /**
//  * Validate all parentheses (O(n) solution, FAST).
// //  * @param {string} s
// //  * @return {boolean}

var isValid = function(s) {
    var bracketsDictionary = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    var stack = [];
  
    for (var i = 0; i < s.length; i++) {
        if (bracketsDictionary[s.charAt(i)]) {
            stack.push(bracketsDictionary[s.charAt(i)]);
        } else {
            if (stack.pop() !== s.charAt(i)) {
                return false;
            }
        }
    }
    if (stack.length !== 0) return false;
    return true;
};

console.log(isValid('{{([]([])}}'));


// another solution

var isValid = function (s) {

    const obj = {
      "(": ")",
      "{": "}",
      "[": "]",
    }
  
    const stack = [];
  
    for (const paran of s) {
      if (obj.hasOwnProperty(paran)) {
        stack.push(paran)
      } else {
        const closeParan = stack.pop();
        if (paran !== obj[closeParan]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };
  

//  Solution 3

function check(expr){
    let holder = []
    let openBrackets = ['(','{','[']
    let closedBrackets = [')','}',']']
    for(let letter of expr){ // loop trought all letters of expr
        if(openBrackets.includes(letter)){ // if its oppening bracket
            holder.push(letter)
        }else if(closedBrackets.includes(letter)){ // if its closing
            let openPair = openBrackets[closedBrackets.indexOf(letter)] // find his pair
            if(holder[holder.length - 1] === openPair){ // check if that pair is last element in array
                holder.splice(-1,1) //if so, remove it
            }else{ // if its not
                holder.push(letter)
                break // exit loop
            }
        }
    }
    return (holder.length === 0) // return true if length is 0, otherwise false
}
check('[[{asd}]]') /// true