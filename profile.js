let ProuserName = document.getElementById("profile-username");
let proEmail = document.getElementById("profile-email");
let proPassword = document.getElementById("profile-password");
let logOut = document.getElementById("logOut");

function redirectToProfile() {
    window.location.href = 'profile.html';

}

function redirectToSignUp() {
    if (localStorage.getItem('token')) {
        alert('Already Signed in');
        window.location.href = 'profile.html';

    }
}


if (localStorage.getItem("user")) {
    let localStorageData = JSON.parse(localStorage.getItem("user"));
    ProuserName.innerText = `Full Name: ${localStorageData.userName}`;
    proEmail.innerText = `Email: ${localStorageData.email}`;
    proPassword.innerText = `Password: ${localStorageData.password}`;
}


logOut.addEventListener("click", () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token")
    window.location.href = 'index.html'

})