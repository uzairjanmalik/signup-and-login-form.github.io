const users = {}; // Object to store users and passwords

function reg() {
   const username = document.getElementById("entername").value;
   const password = document.getElementById("pa").value;
   const education = document.getElementById("education").value;

   if (!username || !password || !education) {
      document.getElementById("hd").innerHTML = "Fill all the inputs for sign up!";
      return;
   }

   if (users[username]) {
      document.getElementById("hd").innerHTML = `${username} is already taken, try later!`;
      return;
   }

   // Store username and hashed password
   users[username] = { password: hash(password), education };

   console.log(`NAME: Mr.${username}   EDUCATION: ${education}`);
   document.getElementById("dh").innerHTML = `SIGN UP SUCCESSFUL Mr.${username}`;

   // Clear messages after showing the result
   setTimeout(() => {
      document.getElementById("hd").innerHTML = "";
      document.getElementById("dh").innerHTML = "";
   }, 3000); // Clear messages after 3 seconds (adjust as needed)
}

function log() {
   const username = document.getElementById("write").value;
   const password = document.getElementById("pass").value;

   if (!username || !password) {
      document.getElementById("show").innerHTML = "Username and password are required!";
      return;
   }

   if (!users[username] || users[username].password !== hash(password)) {
      document.getElementById("show").innerHTML = `Username not found or incorrect password! Please SIGN UP first. Username: Mr.${username}`;
      return;
   }

   document.getElementById("showme").innerHTML = `Log in successful Mr.${username}`;

   // Clear messages after a certain time period (optional)
   setTimeout(() => {
      document.getElementById("showme").innerHTML = "";
      document.getElementById("show").innerHTML = "";
   }, 3000); // Clear messages after 3 seconds (adjust as needed)
}

// Hash function for passwords (implement proper hash function)
function hash(password) {
   // Implement proper hashing algorithm (e.g., bcrypt, SHA256, etc.)
   return password; // For illustration purpose, not secure
}


