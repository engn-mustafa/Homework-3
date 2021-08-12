// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


//function to generate password
  function generatePassword(){
//varriables in the function
    var ResultPW = [];
    var Letters = "abcdefghijklmnopqrstuvwxyz".split("");
    var UpCLt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var FNumb = [0,1,2,3,4,5,6,7,8,9];
    var Charc = "~!@#$%^&*+-=/".split("");
    
  
  //step1 to request number if characters
  var step = window.prompt("Enter number of characters etween 8 to 128");
  const step1 = parseInt(step);
  if ((step1 < 8) || 
    (step1 >128) || 
    (Number.isInteger(step1) == false)){  
    console.log(step1);   
    window.alert("choose values between 8 to 128");
    return ;
  } 

  const Shuffle = function (A){
      for (let i = A.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = A[i]
        A[i] = A[j]
        A[j] = k
      }
    return A;
    }
  //shuffled arrays
  Letters = Shuffle(Letters);
  UpCLt = Shuffle(UpCLt);
  FNumb = Shuffle(FNumb);
  Charc = Shuffle(Charc);
  ResultPW.length= step1;
  
  for (let i =0 ; i< step1;  i++){
    ResultPW.splice(i,1,Letters[Math.floor(Math.random() * Letters.length)]);
  }
  
  ResultPW;
  
  console.log("step1 length = " + ResultPW.length);
  console.log("step1password " + ResultPW);

  // add CAP
  var step2 = window.confirm("Include UPPERCASE charachters?");
    if (step2){
      var rand1 = Math.floor(Math.random() * (step1 - 2) +1);
      rand1 = parseInt(rand1);
      console.log("rand1= " + rand1);
      for (let i =1; i <rand1 ; i++){
        ResultPW.splice(i,1,UpCLt[Math.floor(Math.random() * UpCLt.length)]);
      }  console.log("password  =" + ResultPW);
     // ResultPW = Shuffle(ResultPW)
    } else{
      ResultPW;
    }

  //to add numbers
  var step3 = window.confirm("Include Numbers?");
  if(step3){
    var rand2 = Math.floor(Math.random() * (step1 - 2)+1);
    rand2 = parseInt(rand2);
    console.log("rand2 = " + rand2);
    for (let i =2; i < rand2 ; i++){
      ResultPW.splice(i,1,FNumb[Math.floor(Math.random() * FNumb.length)]);
    } console.log("password  =" + ResultPW);
    console.log("length = " + ResultPW.length);
   // ResultPW = Shuffle(ResultPW)
  } else {
    ResultPW;
  }

  //to add special symbols
  var step4 = window.confirm("Include special character symbol?")
  if(step4){
    var rand3 = Math.floor(Math.random() * (step1 - 2)+1);
    rand3 = parseInt(rand3);
    console.log("rand3 = " + rand3);
    for (let i =3; i < rand3 ; i++){
      ResultPW.splice(i,1,Charc[Math.floor(Math.random() * Charc.length)]);
    } 
    ResultPW = Shuffle(ResultPW);
    console.log("password  =" + ResultPW);
    console.log("length = " + ResultPW.length);
  } else {
    ResultPW = Shuffle(ResultPW);
  }

  // for (let i = 0 ; i < ResultPW.length; i++){
  // if (ResultPW[i] === ''){
  //   ResultPW.splice(i,1,Letters[i])
  //   }
  // }
  // remove commas from string / array
  console.log(ResultPW);
  console.log(ResultPW.length);
  return ResultPW.join('');

   //document.getElementById("demo").innerHTML = points;

  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Array.length = 