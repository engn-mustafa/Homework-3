// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // var ResultPW = [];
  // var Letters = "abcdefghijklmnopqrstuvwxyz".split("");
  // var UpCLt = Letters.map(function(x){ return x.toUpperCase(); })
  // var FNumb = [0,1,2,3,4,5,6,7,8,9];
  // var Charc = "~!@#$%^&*+-=/".split("");

//function to generate password
  function generatePassword(){
//varriables in the function
    var ResultPW = [];
    var Letters = "abcdefghijklmnopqrstuvwxyz".split("");
    var UpCLt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var FNumb = [0,1,2,3,4,5,6,7,8,9];
    var Charc = "~!@#$%^&*+-=/".split("");
    
// Lower case random
  function LowCasLetF(){
    for (let x =step1 -1; x > 0; x--){
  function LowCasLetFF(){
    for (let i = Letters.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let k = Letters[i]
      Letters[i] = Letters[j]
      Letters[j] = k
    }
  }
  }
}

    // function UpCLtF(){
    //   for (let x =step1 -1; x > 0; x--){
    //   for (let i = UpCLt.length -1; i > 0; i--) {
    //     let j = Math.floor(Math.random() * i)
    //     let k = UpCLt[i]
    //     points[i] = UpCLt[j]
    //     points[j] = k
    //   }
    //   UpCLt();
    // }
    // UpCLt();
    // }
    // Lower case random
  //   function lowRandom(){
  //     for (let i = Letters.length -1; i > 0; i--) {
  //       let j = Math.floor(Math.random() * i)
  //       let k = Letters[i]
  //       Letters[i] = Letters[j]
  //       Letters[j] = k
  //     }
  //   return Letters;
  // }
  // // Capital letters Random
  // function RandomCap(){
  //   for (let i = UpCLt.length -1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * i)
  //     let k = UpCLt[i]
  //     UpCLt[i] = UpCLt[j]
  //     UpCLt[j] = k
  //   }
  // return UpCLt;
  // }
  // UpCLt = RandomCap();
  // //Numbers Random
  // function RandomNumber(){
  //   for (let i = FNumb.length -1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * i)
  //     let k = FNumb[i]
  //     FNumb[i] = FNumb[j]
  //     FNumb[j] = k
  //   }
  // return FNumb;
  // }

  //   //symbols Random
  //   function RandomCharc(){
  //     for (let i = Charc.length -1; i > 0; i--) {
  //       let j = Math.floor(Math.random() * i)
  //       let k = Charc[i]
  //       Charc[i] = Charc[j]
  //       Charc[j] = k
  //     }
  //   return Charc;
  //   }
  

//step1 to request number if characters
    var step = window.prompt("Enter number of characters etween 8 to 128");
    step1 = parseInt(step);
    if ((step1 < 8) || 
      (step1 >128) || 
      (Number.isInteger(step1) == false)){  
      console.log(step1);   
      window.alert("choose values between 8 to 128");
      return writePassword();
    } else{
      ResultPW = LowCasLetF();
      //step2();
    }


    // STEP2 ==add CAP Characters
    var step2 = window.confirm("Include Caps?");
    if (step2){ //if Upper case letters selected
      var ResultPW1 = Letters.concat(UpCLt);
      function Step2(){
        for (let x =step1 -1; x > 0; x--){
        for (let i = ResultPW1.length -1; i > 0; i--) {
          let j = Math.floor(Math.random() * i)
          let k = ResultPW1[i]
          ResultPW1[i] = ResultPW1[j]
          ResultPW1[j] = k
        }
      }
      }
      ResultPW= Step2();
    }else{//no upper case then 
      ResultPW();
      //step3();
    }



    // STEP 3 add numbers
    var step3 = window.confirm("Include Numbers?");
    if (step3){ //if Upper case letters selected
      var ResultPW2= ResultPW.concat(FNumb);
      function Step3(){
        for (let x =step1 -1; x > 0; x--){
        for (let i = ResultPW2.length -1; i > 0; i--) {
          let j = Math.floor(Math.random() * i)
          let k = ResultPW2[i]
          ResultPW2[i] = ResultPW2[j]
          ResultPW2[j] = k
        }
       
      }
    
      }
      ResultPW= Step3();
    }else{//no upper case then 
      ResultPW();
     // step4();
    }


    //STEP 4 add special charachters
    var step4 = window.confirm("special characters?");
    if (step4){ //if Upper case letters selected
      ResultPW3 = ResultPW.concat(Charc);
      function Step4(){
        for (let x =step1 -1; x > 0; x--){
        for (let i = ResultPW3.length -1; i > 0; i--) {
          let j = Math.floor(Math.random() * i)
          let k = ResultPW1[i]
          ResultPW3[i] = ResultPW3[j]
          ResultPW3[j] = k
        }
       
      }
     
      }
      ResultPW= Step4();
    }else{//no upper case then 
      ResultPW();
      //step3();
    }


  ResultPW(); 
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Array.length = 