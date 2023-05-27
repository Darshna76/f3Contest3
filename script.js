let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let conPassword = document.getElementById("con-password");
let signUp = document.getElementById("login");
let errorMsg = document.getElementById("errorMsg");



function redirectToProfile() {
  if (localStorage.getItem('token')) {
    window.location.href = 'profile.html';
  }
  else {
    alert('Please Sign Up')
    window.location.href = 'index.html';
  }

}

function redirectToSignUp() {
  window.location.href = 'index.html';
}

signUp.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value === "" || email.value === "" || password.value === "") {
    errorMsg.innerText = "Error : All the fields are mandatory";
    errorMsg.style.color = "red";
  }
  else if (password.value !== conPassword.value) {
    errorMsg.innerText = "Error : Password should be same";
    errorMsg.style.color = "red";

  } else {
    errorMsg.innerText = "Successfully Signed Up!";
    errorMsg.style.color = "#7ECD71";
    setTimeout(() => {
      let user = {
        userName: userName.value,
        email: email.value,
        password: password.value,

      }
      const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let randomString = '';
      for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomString += charset.charAt(randomIndex);
      }

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", randomString);
      window.location.href = 'profile.html'

      userName.value = "";
      email.value = "";
      password.value = "";

    }, 1000)


  }
})

