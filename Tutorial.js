 /*
  * Apprentice: Jorge Cardona
  * Tutor: FreeCampCode.Org
  * References: https://www.youtube.com/watch?v=PkZNo7MFNFg&t=5768s&ab_channel=freeCodeCamp.org
  */
 
 /* 
 //Data Type:
 //undefined, null, boolean, string, symbol, number and object
  */

 var myName = "George"; //string type data
 const myLastname = MacCardownath; //Type constant never changes 
 let MotherOrigin = "Owjetdaew"; //
 myAge = 22; // number
 boolean = true;
 Symbol = alert;


 /* 
 // Storing values with 
 // Assignament Operator
 */
 var a;
 var b = 2;

 a = 7; 

 let sum = a + b;
 console.log(sum);
 
 
 /* 
 Initializing Variables 
 Assigment Operator
 */
 var a;
 var b = 2;

 a = 7; 
 

 /* 
 Uninitialized Variables
 */
 var a = 5;
 var b = 8;
 var c = 22;

 a = a + 1;
 b = b + 8;
 c = c + "Tu edad";
 

 /* 
 Case Sensitivity
 in Variables
 */

 //Declarations
 var StudyCapVar;
 var ProperCamelCase;
 var TitleCaseOver;

 //Assigments
 StudyCapVar = 123;
 ProperCamelCase ="AbCd";
 TitleCaseOver = 9000;

 /*
 Adding Numbers
 */

 var sum = 10 + 10;
 console.log(sum); // show the var sum and any mensage

 /* 
 Subtracting Numbers
 */

 var rest = 45 - 30;
 console.log(rest);

 /* 
 Multiplyind Numbers
 */

 var mult = 8 * 2;
 console.log(mult);

 /* 
 Dividing Number
 */

 var div = 9 / 3;
 console.log(div);

 /* 
 Incrementing Numbers
 */

 var myVar = 96;

 myVar++; // add + 2 number = 98 or myVar +1 = 97;

 /* 
 Decrementing Numbers
 */

 var myVar = 96;

 myVar = myVar - 1; // rest + 1 or any number else;

 //---------------------Numbers and Operations---------------------------//

 var ourDecimal = 5.7;

 var myDecimal = 0.009;

 /*
 Multiple Decimals 
 */

  var productI = 2 * 5;
  console.log(productI);

 /*
 Divide Decimals 
 */

 var productII = 6 / 3;
 console.log(productII);

 /* 
 Finding a Remainder
 */

 var remaider; //the remaider operator look like a % and it gives the remainder of the division of two numbers
 remaider = 11 % 3;
 console.log(remaider);

 /* 
 Compound Assignment 
 with Augmented Addition
 */

 var a = 3;
 var b = 17;
 var c = 11;

 a += 12; //a = a + 12; 
 b += 9; //b = 9 + b;
 c += 7; //c = c + 7;

 /* 
 Compound Assignment 
 with Augmented Subtraction
 */

 var a = 3;
 var b = 17;
 var c = 11;

 a -= 12; //a = a - 12; 
 b -= 9; //b = 9 - b;
 c -= 7; //c = c - 7;

 /* 
 Compound Assignment 
 with Augmented Multiplication
 */

 var a = 3;
 var b = 17;
 var c = 11;

 a *= 12; //a = a * 12; 
 b *= 9; //b = 9 * b;
 c *= 7; //c = c * 7;

 /* 
 Compound Assignment 
 with Augmented Addition
 */

 var a = 3;
 var b = 17;
 var c = 11;

 a /= 12; //a = a / 12; 
 b /= 9; //b = 9 / b;
 c /= 7; //c = c / 7;

 //----------------------String, Quotes Variables--------------------------// [h1]

 /* 
 Declare String Variables    
 */

 var firtName = "George"
 var lastName = "MacCardownaht"

 /* 
 Escaping literal Quotes in Strings
 */

 var myStr = "I am a\" double quoted \"String inside\" double quotes"; // withput \ JavaScript doesn't interprets as a string character
 console.log(myStr);

 /* 
 Quoting Strings 
 with single quotes
 */

 var myStrII = '<a href="https://www.google.com.co" target="blank">link<a/>'; // Or "<a href=\"https://www.google.com.co\" target=\"blank\">link<a/>"        
 console.log(myStrII);

 /*------------Escape Sequences in String-[h2]--------------*/

  /*** 
   Code Output 
    \'  Single Quote
    \'' Double Quote
    \\  Backslash
    \n  New Line
    \r  Carrige Return
    \t  Tab
    \b  Backspace
    \f  Form Feed
   ***/
  var myStrIII = "FirstLine\n\t \\SecondLine\nThirdLine"; // You'll see three diferents lines tab and the backslash character

  /* 
  Connatenating Strings
  with plus Operator
  */

  // Example
  var ourStr = "I come first. " + "I come second."

  var myStrIV = "This is the start. " + "This is the end.";
  console.log(myStrIV);

  /* 
  Connatenating Strings
  with plus Operator
  */

  var ourStrII = "I come first. ";
  ourStrII += "I come second.";

  var myStrV = "This is the first sentence. ";
  myStrV += "This is the sencond sentence";
  console.log(myStrV ,ourStrII);

  /* 
  Contructing strings
  with variables
  */

  var OurName = "George MacCardownath";
  var ourStrIII = "Hello, my name is " + OurName + ", how are you";

  var myName = "George";
  myStrVI = "My name is "+ myName + " nice to meet you!";
  console.log(myStrVI);

  /* 
  Appending Variables
  to Strings
  */

  var anAdjective = "awesome!";
  var ourStrIV = "freeCodeCamp is ";
  ourStrIV += anAdjective; 

  var  someAdjective = "worthwhile";
  var myStrVII = "Learning to code is";
  console.log(myStrVII + someAdjective);

 /* 
 Find Length
 of String
 */

 var aliasNameLength = 0;
 var aliasName = "Flaco";

 aliasNameLength = aliasName.length; // number the character of string

 /* 
  Bracket notation to find 
  first character in string
 */

 var firstLetterOfaliasName = "";
 var aliasName = "Flaco"; //Bracket notation is a waw to get a character at a specific index within a string

 firstLetterOfaliasName = aliasName [firstName.length -1]; // Brackect with a number inside so most modern programming languages like j.s

 var lastLetterOfaliasName = ""; //don't srart counting at one like a humans do they start with 0
 var aliasName = "Flaco";

 lastLetterOfaliasName = aliasName[aliasName.length -1];
 
 /* 
 Bracket Notion to find 
 Nth-to-Last Character in String
 */

 const myLastname = "MacCardownath";
 var trirdToLastLetterOfmyLastname= myLastname[myLastname.length -3];

 /* 
 Word Blanks
 */ 
 
 function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result ="";
    result += "The " + " " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb; // " " is a space in the code line between every nouns verbs
    return result;
 }
 
 console.log(wordBlanks("dog","big","ran","quickly"));

 /*  Store Multiple Values
 ------------------------------with Arrays--------------------------------
 */

 var ourArray = ["George", 25];

 var myArray = ["Quincy", 1];

 /* 
 Nested Arrays
 */

 var ourArrayII = [["the universe", 42], ["everyting", 11001]];
 
 var myArrayII = [["Buls",23],["White sox",45]];

 /* 
 Access Array 
 Data with Indexes
 */
                               //Indexes 
 var ourArrayII = [50,60,70]; // positions [0,1,2] because the belong line
 var ourData = ourArrayII[0]; //equals 0=50

 var myArrayII = [50,60,70];

 var myData = myArrayII[0];
 console.log(myData);

 /* 
 Modify Array 
 Data with Indexes
 */

 var ourArrayIII = [18,64,99];
 ourArrayIII[1] = 45;

 var myArrayIII = [18,64,99];
 myArrayIII[1] = 45;
 console.log(myArrayIII);

 /* 
 Access Multi-Dimensional
 Arrays with Indexes
 */

 var myArrayIV = [[1,2,3],[4,5,6], [7,8,9], [[10,11,12], 13,17]]; // 

 var myData = myArrayIV[2][1] = 25; //the first [] is the position of the array and second [] is the position in inside the array
 console.log(myArrayIV);

 /* 
 Manipulate Arrays 
 with push()
 */

 var ourArrayV = ["Stimpson","J","cat"];
 ourArrayV.push(["happy","joy"]);
 // Example=> ourArray now equals ["Stimpson" , "J", "cat" ["happy", "joy"]]
 
 var myArrayVI = [["George",25],["cat",4]];
 myArrayVI.push(["dog", 5])

 /* 
 Manipulate Arrays
 with pop()
 */

 var ourArrayVII = [1,2,3];
 var removedFromOurArrayVII = ourArrayVII.pop();
 // removedFromOurArray now equals 3, and ourArray now equals [1,2]

 var myArrayVIII = [["George",23],["cat",4]] 
 var removedFromMyArrayVIII = myArrayVIII.pop(); //We can remove an item from an array with pop funtion here 
 console.log(myArrayVIII); // deleted one array the last array

 /* 
 Manipulate Arrays
 with shift()
 */

 var ourArrayVIII = ["Stimpson","J",["cat"]];
 var removedFromOurArrayIX = ourArrayVIII.shift();
 
 var myArrayX = [["George",23],["dog",5]]; // Deleted the fist part of the array
 var removedFromOurArrayX = myArrayX.shift();
 console.log(myArrayX);

 /* 
 Manipule Arrays
 with unshift()
 */

 var ourArrayIX = ["Stimpson","J","cat"];
 ourArrayIX.shift(); // ourArrayIX now equals ["J","cat"]
 ourArrayIX.unshift("Happy"); 
 // ourArray now equals ["Happy","J","cat"]

 var myArrayXI = [["George",25],["dog",5]];
 myArrayXI.shift();
 myArrayXI.unshift(["Ivan",25]);
 console.log(myArrayXI);

 /*----------------Shopping List---------------------*/

 var myList = [["cereal",3],["milk",2],["bananas",5],["juice",4],["eggs",6]];
 console.log(myList);

 /*--------------------------------Funtions(){}-----------------------------*/
 /* 
 Write Reusable Code
 with Functions
 */

 function ourReusableFunction(){
   console.log("Hey world");
 }
 ourReusableFunction();


 /* 
 Passing Values to
 Funtions with Arguments
 */

 function ourFunctionWithArgs(a,b){
   console.log(a-b);
 }
 ourFunctionWithArgs(10,5);

 /* 
 Global Scope
 and Funtions
 */

 var myGlobal = 5;
 
 function fun1(){
   	oppsGlobal = 10;
 }

 function fun2(){
    var output = "";
    if(typeof myGlobal != "undefined"){ 
      output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
       output += " oopsGlobal: " + oppsGlobal;
    }
    console.log(output);
 }
 fun1();
 fun2();

 /* 
 Local Scope
 and Functinos
 */

 function myLocalScope() {
   var myVari = 5; 
   console.log(myVari);
 }

 myLlocalScope();

 /* 
 Global vs. Local
 Scope in Functions
 */

 var outerWear = "T-Shirt"; // it ejecute like a global varible 
 function myOutfit(){
   var outerWear = "Shirt"; // it ejecute like a local varible is over of global
    return outerWear;
 }
 console.log(myOutfit()); // local inside of funtion
 console.log(outerWear); // global
 

 /* 
 Return a Value from
 a Funtion with Return
 */

 function minusSeven(num){
    return num - 7;
 }

 console.log(minusSeven(10));

 function timesFive(num){
   return num * 5;
 }

 console.log(timesFive(5));

 /* 
 Understanding Undefined Value
 Returned from a Function
 */

 var sum =0;
 function addThree(){
    sum = sum + 3   
 }
 function addFive(){
    suma += 5;
 }

 /* 
 Assignment with a 
 Returned Value
 */

 var changed = 0;

 function change(){
    return (num+5)/3;
 }

 change = change(10);

 var processed =0;

 function processArg(){
    return (num + 3) / 5;
 }

 processed = processArg(7);

 /* 
 Stand in Line
 */

 function nextInLine(arr, item){ 
    arr.push(item);
    return item;
 }

 var testArr = [1,2,3,4,5];

 console.log("Before: " + JSON.stringify(restArr));
 console.log(nextInLine(testArr, 6)); // add in the same line a number 6 in the array
 console.log("After: " + JSON.stringify(testArr));

 /* 
 Boolean Values
 */

 function welcomeToBooleans(){ // the booleans return a function and valide it
   return false;
 }

 /*----------------------------Function if(Condition)---------------------------------*/
 /* 
 Use Conditional Logic
 with If Statements
 */

  function ourTrueOrFalse(isItTrue){
     if(isItTrue){
         return "Yes, it's true";
     }
     return "No, it's false";
  }

  function trueOrFlase(wasThatTrue){
      if(wasThatTrue){
         return "Yes, that was true";
      }
      return "No, that was true";
  }

  console.log(trueOrFlase(true));

  /* 
  Comparison with the 
  Equality Operator
  */

  function testEqual(val){
   if (val == 12) { //check if the value is the same in testEqual
      return "Equal";
   }
   return "Not Equal";
  }

  console.log(testEqual(10));

  /*
  Comparison with the
  Strict Equality Operator 
  */

  function testStrict(valI){
     if (valI){
      return "Equal";
     }
     return "not equal";
  }

  testStrict(10); // validate if is a string

  /* 
  3 === 3 true
  3 === '3' false is a number no string
 */

 /* 
 Practice Comparing
 Different Values
 */

 function compareEquality(){
    if(a==b){ // Equals. No matter the diferent type data if the same
      return "Equal";
    }
    return "Not equal";
  } 
  console.log(compareEquality(10, "10"));  

  function compareEquality(){
   if(a===b){ // No equals, metter the diferent type data between number and string 
     return "Equal";
   }
   return "Not equal";
 } 
 console.log(compareEquality(10, "10"));   

 /* 
 Comparison with the 
 Inequality Operator
 */

function testNotEquality(){
   if(valII != 99){ // No equals, because 99 is diferent from 10
     return "Equal";
   }
   return "Not equal";
 } 
 console.log(testNotEquality(10));   
 
 /* 
 Comparison with the 
 Strict Inequality Operator
 */

function testStrictNotEqual(){
   if(valIII !== 17){ //inequality operator=> !== not equal to 17
     return "Not equal";
   }
   return "Equal";
 } 
 console.log(compareEquality(10));    

/* 
Comparisons with the
Logical And Operator
*/

function testGreaterThan(){
   if (valIV > 100) {
      return "Over 100";
   }
   if(valIV > 10){
      return "Over 10"
   }
   return "10 or under";
}

console.log(testGreaterThan(10));

/* 
Comparisons with the Greater
than or Equal to Operator
*/

function testGreaterOrEqual(){
   if (valIV >= 100) {
      return "Over 100";
   }
   if(valIV >= 10){
      return "Over 10"
   }
   return "Less than 10";
}

console.log(testGreaterOrEqual(10));


/* 
Comparisons with the 
Less than Operator
*/

function testLessThan(){
   if (valIV < 98) {
      return "under 100";
   }
   if(valIV < 8){
      return "under 10"
   }
   return "Less than 10";
}

console.log(testLessThan(10));

/* 
Comparisons with the Lees
than or Equal to Operator
*/

function testLessEqual(){
   if (valIV <= 98) {
      return "Smaller than 100";
   }
   if(valIV <= 8){
      return "Smaller than 10"
   }
   return "Less than 10";
}

console.log(testLessEqual(10));

/* 
Comparisons with the
Logical And Operator
*/

 function testLogicalAnd (valV){
    if (valV <= 50 && valV >= 25){ // && == AND 
         return "Yes";  
    }
    return "No";
 }
 testLogicalAnd(10);

 /* 
Comparisons with the
Logical Or Operator
*/

function testLogicalOR (valVI){
   if (vaVI < 10 || val > 20){ // || == Or 
        return "Outside";  
   }
   return "inside";
}
testLogicalOr(15);

/* 
Else Statements
*/

function testElse(VII){
   var result = "";

   if (valVII > 5){
      result = "Bigger than 5";
   }

   if (valVII <=5){
      result = "5 or Smaller";
   }
   return "Between 5 and 10";
}

testElse(4);

/*
Else if
Statements
*/

function testElseIf(VIII){ //  Multiple statements 
   if (valVIII > 10){
      return "Bigger than 5";
   } else if (valVIII < 5){
      return "5 or Smaller";
   } else {
      return "Between 5 and 10";
   }
}

testElseIf(7);

/* 
Logical Order in
If Else Statements 
*/

function orderMylogic(valIX){ //  Multiple statements 
   if (valIX > 5){
      return "Less than 5";
   } else if (valIX < 10){
      return "10 or Smaller";
   } else {
      return "Between 5 and 10";
   }
}

console.log(orderMylogic(7));

/* 
Chaining 
If Else Statements
*/

function testSize(num){
   if (num < 5){
      return "Tiny"
   }
   if (num < 10){
      return "Small"
   }
   if (num < 15){
      return "Medium"
   }
   if (num < 20){
      return "Large"
   }
   if (num >= 20){
      return "Huge"
   }
   return "Change me";
}

console.log(testSize(19));

/* 
Write chained if/else if statements to fulfill the following conditions
 num < 5 - return "tiny"
 num < 10 - return "small"
 num < 15 - return "medium"
 num < 20 - return "large"
 num >= 20 - return "huge"
*/

/* 
Golf Code
*/
var names = ["Hole-in-one!", "Eagle"," Birdie"," Par"," Bogey"," Double Bogey","Go Home!"];
function golfScore(par, strokes){
   if (strokes == 1){
      return names[0];
   }else if (strokes <= par - 2){
      return names[1];
   }else if (strokes == par - 1){
      return names[2];
   }else if (strokes == par){
      return names[3];
   }else if (strokes == par + 1){
      return names[4];
   }else if (strokes == par + 2){
      return names[5];
   }else if (strokes >= + 1){
      return names[6];
   }

   return "Change me";
}

//change for see a code line run in the console j.s
console.log(golfScore(5,4));

/* 
Strokes  Return
1           "Hole-in-one!"
<= par -2   "Eagle"
par - 1     "Birdie"
par         "par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par +3   "Go home!"  
*/

/*------------------------------------Switch{}Statements-----------------------------------*/

function caseInSwitch(val){
   var answer  ="";
   switch(val){
      case 1:
         answer = "alpha";
         break;
      case 2:
         answer = "beta";
         break;
      case 3:
         answer = "gama";
         break;
      case 4:
         answer = "delta";
         break;
   }
   return answer;
}
console.log(caseInSwitch(1)); //ejecute the number of case that is inside caseInSwitch(AnyNumber) (2) (3)...;
 /* test val statement which tests val and sets answer for following conditions:
 1 - "alpha"
 2 - "beta"
 3 - "gama"
 4 - "delta"
 */

 /* 
 Default Option in
 Switch Statements
 */

function switchOfStuff(val){
   var answer  ="";
   switch(val){
      case "a":
         answer = "alpha";
         break;
      case "b":
         answer = "beta";
         break;
      case "c":
         answer = "gama";
         break;
      case "d":
         answer = "delta";
         break;
      default:
         answer = "forze";
         break;
   }
   return answer;
}
console.log(switchOfStuff("a")); 

/* 
Multiple Identical Options
in Switch Statements
*/

function sequentialSizes(vali){
   var answer = "";
   switch (vali) {
      case 1:
      case 2:
      case 3:
         answer = "Low";
         break;
      case 4:
      case 5:
      case 6:
         answer = "Mid";
         break;
   
      case 7:
      case 8:
      case 9:
         answer = "High";
         break;
   }   
   
   return answer;
}

// Change this value to test 

console.log(sequentialSizes(5));

/* 
Replacing If Else Chain
with Switch  
*/

 var answer = "";

 switch (valiu) {
    case "Bob":
       answer ="Marley";
       break;
    case 42:
       answer = "The answer";
       break;
    case 1:
       answer = "ther is #1";
       break;   
    case 99:
      answer = "Missed me by this much!";
       break;
    case 7:
       answer = "Days";
       break;

    default:
       answer = "Eres un pendejo";
       break;
 }

 /* 
 Returning Boolean Values 
 from Functions
 */

 function isLess(a,b) {
    return a < b;
 }

 console.log(isLess(10,15));

 /* 
 Returning Early Pattern 
 from Functions
 */

 function abTest(a,b){
   if(a < 0 || b < 0){
      return undefined;
   }
   
   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
 }

console.log(abTest(2,2));

/* 
Counting 
Cards
*/

var count = 0;

function cc(card){
   switch(card){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count++;
         break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
         count--;
         break;                     
   }

   var holdbet = "Hold";
   if (count > 0) {
      holdbet = "bet"
   } 
   return count + " " + holdbet;
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(4));

/*-------------------------------------------Objects J.S---------------------------------------------*/
/* 
Build
JavaScript Objects
*/
 //Example

 var ourDog = {
   "name" : "Orion",
   "legs": 4,
   "tails": 1,
   "friends" : ["everything!"]

 };

 var myCat = {
   "name" : "Ganesh",
   "legs" : 4,
   "tails" : 1,
   "friends" : ["Forever"]


 };

 /* 
 Accessing Object Properties
 with Dot Notation
 */

 var testObj = {
    "hat" : "ballcap",
    "shirt" : "jersey",
    "shoes" : "cleats"
 };

 var hatValue = testObj.hat; // get the property of object that is requery
 var shirtValue = testObj.shirt;
 var shoesValue = testObj.shoes;

 /* 
 Accessing Object Propeties
 with Bracket Notation
 */

var testObj = {
   "hat" : "ballcap",
   "shirt" : "jersey",
   "shoes" : "cleats"
};

var hatValue = testObj['hat']; // get the property of object that is requery into the []
var shirtValue = testObj['shoes'];

/* 
Accessing Object Propeties 
with Variables
*/

var testObject = {
   12: "Namath",
   16: "Montana",
   19: "Unitas"
};

var playerNumber = 16;
var player = testObject[playerNumber];

/* 
Updating
Object Properties
*/

var ourDog = {
   "name" : "Orion",
   "legs": 4,
   "tails": 1,
   "friends" : ["everything!"]
 };

 var myCat = {
   "name" : "Ganesh",
   "legs" : 4,
   "tails" : 1,
   "friends" : ["Forever"]
 };

 myCat.name = "Ganesha"; // Update the new name in the property name of the object myCat

 /* 
 Add new Property
 to an Object
 */

var ourDog = {
   "name" : "Orion",
   "legs": 4,
   "tails": 1,
   "friends" : ["everything!"]
};

ourDog.Color ="Black"; // You can add a new property to object already created 
ourDog['Bark'] = "Woof!";

/* 
Delete Property 
from an Object
*/

var ourDog = {
   "name" : "Orion",
   "legs": 4,
   "tails": 1,
   "friends" : ["everything!"]
};

delete ourDog.Bark;

/*
Using Objects
for Lookups
*/

function phoneticLookup(val){
   var result = "";

   var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlei": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot" : "Frank"
   };
   result = lookup[val];
   return result;
}
console.log(phoneticLookup("charlei"));
   /*  
   switch (val) {
      case "alpha":
         result = "Adams";
         break;
      case "bravo":
         result = "Boston";
         break;
      case "charlei":
         result = "Chicago";
         break;
      case "delta":
         result = "Dever";
         break;
      case "echo":
         result = "Easy"
         break;
      case "foxtrot":
         result = "Frank";
         break;
      default:
         break;
   } */

/*
Testing Objects
for Properties
*/

var myObj = {
   gitf: "Moto",
   pet: "Dog",
   bed: "sleigh"
};

 function checkObj(checkProp){
    if (myObj.hasOwnProperty(checkProp)){
      return myObj[checkProp];
   }else {
      return "Not found";
   }
 }
 console.log(checkObj("gift"));

 /* 
Manipulating
Complex Objects
 */

var myMusic = [
   {
      "artist" : "Billy Joel", 
      "tittle" : "Piano Man",
      "release_year": 1973,
      "formats" : [
         "CD",
         "8T",
         "LP"
      ],
      "gold": true
   },
   {
      "artist" : "Beau Carnes", // Create an other array list of new artist in the Object myMusic
      "tittle" : "Cereal Man",
      "release_year": 2003,
      "formats" : [
         "Youtube Video"
      ]
   }
];

/* 
Accessing
Nested Objects
*/

var myStorage = {
   "car": {
      "inside": {
         "glove box" : "maps",
         "passenger seat": "crumbs"
      },
      "outside":{
         "trunk" : "jack"
      }
   }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

/* 
Accessing 
Nested Arrays
*/

var myPlants = [
   {
      type : "flowers",
      list: [
         "rose",
         "tulip",
         "girasol"
      ]
   },
   {
      type: "trees",
      list: [
         "fir",
         "pine",
         "birch"         
      ]
   }
];

var secondTree = myPlants [1].list[1]; 

/* 
Record
Collection
*/

var Collection = {
   "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks":[
         "Let it Rock",
         "You give Love a bad name"
      ]
   },
   "2468": {
      "album" : "1999",
      "artist": "Prince",
      "tracks": [
         "1999",
         "Little red Corvette"
      ]
   },
   "1245": {
      "artist": "Robert Palmer",
      "tracks": []
   },
   "5439" : {
      "album": "ABBA Gold"
   }
};

var CollectionCopy = JSON.parse(JSON.stringify(Collection));

function updateRecords(id, prop, value){
   if (value === ""){
      delete Collection[id][prop];
   }else if (prop === "tracks"){
      Collection[id][prop] = Collection[id][prop] || [];// if this already exists array so if this already exicts we're gonna set to equal itself but if itself doesn't exist we'll just set it to equal and empety array
      Collection[id][prop].push(value); // update the new properties inside in the [id] that I've select to Collection
   }else {
      Collection [id][prop] = value;
   }
   return Collection; 
}

updateRecords(1245,"tracks","test");
console.log(updateRecords(5439,"artits", "ABBA"));

/*---------------------------------------------------------------------------------------------------------------------*/

/*-----------------------While Loops----------------------*/

/* 
Iterate with
While Loops
*/ 

var myArrayXI = [];
var i = 0;
while(i <= 5){
   myArrayXI.push(i);
   i++;
}

console.log(myArrayXI);

/*--------------------------For Loops----------------------*/

/* 
Iterate with
For Loops
*/

var ourArrayX = [];

for(var i = 0; i <= 5; i++){
   ourArrayX.push(i);
}

console.log(ourArrayX);


/* 
Iterate Odd Numbers
with a For Loops
*/

var ourArrayXI = [];

for(var i = 0; i<=10; i+=2){
   ourArrayXI.push(i);
}
console.log(ourArrayXI);

/* 
Count Backwards
with a For Loop
*/

var ourArrayXII = [];

for(var i = 10; i>0; i -=2){
   ourArrayXII.push(i);
}
console.log(ourArrayXII);

/*
Iterate Through an Array
with a For Loop
*/

var ourArrayXIII = [9, 10, 11, 12];
var ourTotal=0;

for (var i=0; i < ourArrayXIII.length; i++){
   ourTotal += ourArrayXIII[i];
}
console.log(ourTotal);

/*
Nesting
For Loops 
*/

function multiplyAll(arr){
   var prod = 1
   for(var i=0; i < arr.length; i++){
      for(var j=0; j < arr[i].length; j++){
         prod *= [i][j]
      }
   }
      
   return prod;

}

var prod = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(prod);

/* 
Interate with
Do... While Loops
*/

var myArrayXII = [];
var i =10;

do{
   myArrayXII.push(i);
   i++;
}while(i<5)

console.log(i, myArrayXII);

/* 
Profile
Lookup
*/

var contacts = [
   {
      "firstName" : "Akira",
      "lastName" : "Laine",
      "number" : "0543236563",
      "likes" : ["Pizza","Coding", "Brownie Points"]
   },
   {
      "firstName" : "Harry",
      "lastName" : "Potter",
      "number" : "0994372684",
      "likes" : ["Howarts","Magic", "Hagrid"]
   },
   {
      "firstName" : "Sherlock",
      "lastName" : "Holmes",
      "number" : "0487345643",
      "likes" : ["Intriguing Case", "Violin"]
   },
   {
      "firstName" : "Kristian",
      "lastName" : "Vos",
      "number" : "unknown",
      "likes" : ["JavaScript", "Gaming", "Foxes"]  
   }
];

function lookUpProfile(name, prop){
   for (var i = 0; i < contacts.length; i++){
      if(contacts[i].firstName === name){
         return contacts[i][prop] || "No such property";
      }
   }
   return "No such contact";
}

var data = lookUpProfile("Akira","likes");
console.log(data); 

/* 
Generate Random
Fractions
*/

function randomFraction(){
   return Math.random();
}

console.log(randomFraction());

/* 
Generate Random
Whole Numbers
*/

var randomNumberBetween0and19 = Math.floor(Math.random()*20);
function randomWholeNum(){
   return Math.random(Math.random()*10);
}

console.log(randomWholeNum());

/* 
Generate Random Whole
Numbers within a Range
*/

function ourRandomRange(ourMin, ourMax){
   return Math.floor(Math.random() * (ourMax - ourMin + 1))+ourMin;
}

ourRandomRange(1,9);

function randomRange(){
   return Math.floor(Math.random() * (myMax - myMin + 1))+ myMin;  
}

var myRandom = randomRange (5,15);
console.log(myRandom);

/* 
Use the
parseInt Function
*/

function convertToInteger(str){
   return parseInt(str);
}

convertToInteger("56");

/* 
Use the parseInt Function
with a Radix
*/

function convertToInteger(){
   return parseInt(str,2)
}

convertToInteger("10011");


/* 
Use the Conditional
(Ternary) Operator
*/

function checkEqual(a,b){
   return a === b ? true : false;
   return a === b;
}

checkEqual(1,2);


/* 
Use Multiple Conditional
(Ternary) Operators
*/


function chechSign(num){
   return num > 0 ? "Positive" : num < 0 ? "Negative" : "zero"
}

chechSign(10);


/* 
Differences Between
the var and let Keywords
*/

var catName = "Quincy"; // Let get declared once time no more
var quote;

var catName = "Beau";

function catTalk(){
   "use strict";

   catName = "Ganesh";
   quote = catName + " says meow";

}

catTalk();

/* 
Compare Scopes of
the var and let Keywords
*/

function checkScope(){
   "use strict";
   var i = "function scope";
   if(true){
      i = "block scope";
      console.log("Block scope i is: ",i);
   }
   console.log("Function scope i is: ",i);
   return i;
}

checkScope();


/* 
Declare a Read-Only variable
with the const Keyword
*/

 function printManyTimes(str){
    "use strict";

    const SENTENCE = str + " is cool!";

    for(let i = 0; i < str.length; i+=2){
      console.log(SENTENCE);
    }

 }
 printManyTimes("freeCodeCamp");


 /* 
 Mutate an Array
 Declared with const
 */

 const s = [5,7,2]; // protect your data from mutation 
 function editInPlane(){
    "use strict";

    s[0]=2;
    s[1]=5;
    s[2]=7;
 }

 editInPlane();
 console.log(s);


 /*
Prevent
Object Mutation
 */
function freezeObj(){

   const MATH_CONSTANTS = {
      PI: 3.1416
   };

   Object.freeze(MATH_CONSTANTS); // Use if you don't want any of items in the object to change 

   try{ // we can change the array if delete the Object.freeze 
      MATH_CONSTANTS.PI = 99;
   }catch (ex){
   console.log(ex);
   }
   return MATH_CONSTANTS.PI;
}
 
const PI = freezeObj();


/* 
Use Arrow Functions to Write
Concise Anonymous Functions
*/

const magic = () => new Date();


/* 
Write Arrow Functions
with Parameters
*/

const myConcat = (arr1, arr2) => arr1.contacts(arra2); 

console.log(myConcat([1,2],[3,4,5]));


/* 
Write Higher Order
Arrow Functions
*/

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
   const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
   return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


/* 
Write Higher Order
Arrow Functions
*/

const increment = (function(){
   return function increment(number, value = 1){
      return number + value;
   };
}());

console.log(increment(5,2));
console.log(increment(5));


/* 
Use the Rest Operator
with Function Parameters
*/

const sum = (function(){
   return function sum(...args){ //we can have any numbers of arguments what do you want
      return args.reduce((a, b) => a+b + 0);
   };
}());


/* 
Use the Spread Operator
to Evaluate Arrays In-Place
*/

const arr1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
let arr2;

(function (){
   arr2 = [...arr1];
   arr1[0] = 'potato'
})();
console.log(arr2);


/* 
Use Destructuring Assigment 
to Assign Variables from Objects
*/ 

var voxel = {x:3.6, y:7.4, z:6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const {x:a, y:b, z:c}= voxel;

const AVG_TEMPERATURES = {
   today: 77.5,
   tomorrow: 79
};

function getTempOfTmrw(avgTemperatures){
   "use strict";
   const { tomorrow : TempOfTomorrow } = avgTemperatures;
   return TempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79


/* 
Destructuring Assigment
with Nested Objects
*/

const LOCAL_FORESCAST = {
   today : {min:72 , max: 83 },
   tomorrow : {min:73.3, max:84.6}
};
function getMAxOfTmrw(forecast){
   "use strict";
   const  { tomorrow: {max : maxOfTomorrow}} = forecast;
   return maxOfTomorrow;
}

console.log(getMAxOfTmrw(LOCAL_FORESCAST));


/* 
Use Destructuring Assigment
to Assign Variable from Arrays
*/

const [z,x, ,y] = [1,2,3,4,5,6];//2. if we wnated number 4 to be going to a variable, just add some commas  example: We have the first element the second element, we skip the tird element and then we have a four element
console.log(z,x,y);

let a = 8, b = 5; //1. dustrututing from objects is that you cannot specify which element from the array to go into a varibale just goes in order 
(() => { 
   "use strict";
   [a, b] = [b, a]
})();
console.log(a);
console.log(b);


/* 
Use Destruturing Assigment
with the Rest Operator
*/

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
   const [ , , ...arr] = list;
   return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);


/* 
Use Destructuring Assigment
to Pass an Object as a
Function's Parameters
*/

const stats = {
   max: 56.78,
   standard_deviation: 4.34,
   median: 34.54,
   mode: 23.87,
   min: -0.75,
   average: 35.85
};

const half = (function(){
   return function half({max,min}){
      return (max + min) / 2.0;
   };
})();

console.log(stats);
console.log(half(stats));


/* 
Create Strings using 
Template Literals
*/

const person = {
   name: "Zodiac Hasbro",
   age: 56
};

const greeting = `Hello, my name is ${person.name} !
I am ${person.age} years old.`;

console.log(greeting);

const result = {
   success: ["max-lengt", "no-amd", "prefer-arrow-functions"],
   failure: ["no-var", "var-on-top", "linebreak"],
   skipped: ["id-blacklist", "no-dup-key"]
}; 
function makeList(arr){
   const resultDisplayArray = [];
   for (let i = 0; i < arr.length; i++){
      resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
   }
   return resultDisplayArray;
}

const resultDisplayArray = makeLsit(result.failure);
console.log(resultDisplayArray);


/* 
Write Concise Object Literal
Declarations Using Simple Fields
*/

const createPerson = (name, age, gender) => ({name, age, gender}); //Another way to show an object and onws characters
console.log(createPerson("Zodiac Hasbro", 56, "male"));

/* 
Write Concise
Declarative Functions
*/

const bicycle = {
   gear: 2,
   setGear (newGear) { // object can have a function inside like that
      "use strict";
      this.gear = newGear;
   }
};

bicycle.setGear(3);
console.log(bicycle.gear);


/* 
Use class Syntaxys to 
Define a Constructor Function
*/

function makeClass(){
   class Vegetable {
      constructor(name){
         this.name= name
      }
   }
   return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);


/* 
Use getters and setters to 
Control Access to an Object
*/

class Book { //example
   constructor(author){
      this.author = author;
   }
   //Getter
   get writer(){
      return this._author
   }
   //Setter
   set writer(updatedAuthor){
      this._author = updatedAuthor;
   }
}

function makeClass(){
   class Thermostat{
      constructor(temp){
         this._temp = 5/9 * (temp - 32);
      }
      get temperature(){
         return this._temp
      }
      set temperature(updatedTemp){
         this._temp = updateTemp;
      }
   }
   return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
 

/* 
Understand the Differences
Between import and require
*/

