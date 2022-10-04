var yes = true
   var no = false
   var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
   var uppercased = alphabet.map(alphabet => alphabet.toUpperCase());
   var num = ['0','1','2','3','4','5','6','7','8','9']
   var special = ['!','#','-','*','^']   
   var characters = [alphabet, uppercased, num, special]
    //characters =       0          1        2      3
   //can i store all this info in an object ?
  //var password = Math.floor(Math.random(characters))
  var passwordText =  document.querySelector("#password");
//function usrinput() {  //gets input from user 

//yes = true
//no = false

   //var charlen = prompt(
       // 'how long would you like your password to be? (type a number 1-9)'
       // ) //if null loop 'getusrinput' until we get a value of 1-9
    //var numeric = prompt(
     // 'will you include numbers in your password (type yes or no)'
   //     ) //if yes:include numbers in the password
   // var Uppercase = prompt(
    //    'will you include: Uppercase characters (type yes or no)'
    //   ) //if yes: include uppercaseletters (characters[1])
   // var symbols = prompt(
   //     'last but not least will you include: special characters (type yes or no)'
   ////     ) //if yes: include special (characters[3])
//var options = {
  //"charlen": charlen,
  //"Uppercase": Uppercase,
  //"symbols": symbols,
  //"numeric": numeric
//}
//return options
//}  //returns values stored within the 'usr

//Write password to the #password input
function usrinput() {
  //var passwordText =  document.querySelector("#password");
       
  var generateBtn = document.querySelector("#generate","#btn");
  var charlen = prompt(
            'how long would you like your password to be? (type a number 1-9)'
            ) //if null loop 'getusrinput' until we get a value of 1-9
        var numeric = prompt(
            'will you include numbers in your password (type yes or no)'
            ) //if yes:include numbers in the password
        var Uppercase = prompt(
            'will you include: Uppercase characters (type yes or no)'
            ) //if yes: include uppercaseletters (characters[1])
        var symbols = prompt(
            'last but not least will you include: special characters (type yes or no)'
            ) //if yes: include special (characters[3])
     //generateBtn.addEventListener("click", (usrinput));
        }
    
        var generateBtn = document.querySelector("#generate");
function writePassword() {
  
     usrinput = input [charlen,Uppercase,symbols,numeric] 
   // "charlen": charlen,
  //  "Uppercase": Uppercase,
   // "symbols": symbols,
  //  "numeric": numeric

  input.charlen = ('');
    while (length.input < ((input[0]))) {
        output += Math.floor(Math.random(characters[0]))   
    if (usrinput.input.Uppercase == true){
        output += Math.floor(Math.random(characters[0,1]))}
        else null (writePassword)
    if (usrinput.input.numeric == true){
        output += Math.floor(Math.random(characters[0,1,2]))} 
         //needs more logic
        else
    if (usrinput.input.symbols == true); {
        output += Math.floor(Math.random(characters[0,1,2,3]))}
        
    }     
        
  output = password;
  passwordText = document.querySelector("#password");
} //from starter code
generateBtn.addEventListener("click", (usrinput()));
//generateBtn.addEventListener("click", writePassword());
