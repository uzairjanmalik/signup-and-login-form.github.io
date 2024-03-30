
const names = [];
const pa = []; // Change to an array for password
const edu = [];

function reg() {
   const a = document.getElementById("entername").value;
   const b = document.getElementById("pa").value;
   const c = document.getElementById("education").value;

   if (names.includes(a)) {
      document.getElementById("hd").innerHTML = `${a} is already taken, try later!`;
   } else {
      names.push(a);
      pa.push(b); // Push password into 'pa' array
      edu.push(c);
      if (a.length !== 0 && b.length !== 0 && c.length !== 0) {
         console.clear();
         console.log(`NAME: Mr.${a}   password: ${b}   EDUCATION: ${c}`);
         document.getElementById("dh").innerHTML = `SIGN UP SUCCESSFUL Mr.${a}`;
         // Clear messages after showing the result
         setTimeout(() => {
            document.getElementById("hd").innerHTML = "";
            document.getElementById("dh").innerHTML = "";
         }, 3000); // Clear messages after 3 seconds (adjust as needed)
      } else {
         document.getElementById("hd").innerHTML = "Fill all the inputs for sign up!";
      }
   }
}









// const passwords = [123];

// function log() {
//    let x = document.getElementById("write").value;
//    let y = document.getElementById("pass").value;
   
//    let index = names.indexOf(x);
//    let ps = passwords.indexOf(parseInt(y));;
//    if (index !== -1 && ps !== 0) {
//       document.getElementById("showme").innerHTML = `Login successful Mr.${x}`;
//       // document.getElementById("show").innerHTML = ""; // Clear showme message
//    } else {
//       document.getElementById("show").innerHTML = `Username not found or incorrect password! Please SIGN UP first. Username: Mr.${x}`;
//       // document.getElementById("showme").innerHTML = ""; // Clear show message
//    }

//    // Clear messages after a certain time period (optional)
//    setTimeout(() => {
//       document.getElementById("showme").innerHTML = "";
//       document.getElementById("show").innerHTML = "";
//    }, 3000); // Clear messages after 3 seconds (adjust as needed)
// }

const passwords = [123]; // Sample password, replace it with your actual passwords

function log() {
   let x = document.getElementById("write").value;
   let y = document.getElementById("pass").value;
   
   let ps = passwords.indexOf(parseInt(y)); // ParseInt added to compare numerical values
   
   if (ps !== -1 && ps === 0) { // Check if the password exists in the array and matches the first element
      document.getElementById("showme").innerHTML = `Login successful Mr.${x}`;
      document.getElementById("show").value = ""; // Clear showme message
   } else {
      document.getElementById("show").innerHTML = `Username not found or incorrect password! Please SIGN UP first. Username: Mr.${x}`;
      document.getElementById("showme").innerHTML = ""; // Clear show message
   }

   // Clear messages after a certain time period (optional)
   setTimeout(() => {
      document.getElementById("showme").innerHTML = "";
      document.getElementById("show").innerHTML = "";
   }, 3000); // Clear messages after 3 seconds (adjust as needed)
}

