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
   var outerWear = "T-Shirt"; // it ejecute like a local varible is over of global
    return outerWear;
 }
 console.log(myOutfit()); // local inside of funtion
 console.log(outerWear); // global
 
