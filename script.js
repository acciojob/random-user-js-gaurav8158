//your code here
let userData;
let userDetails = document.getElementById("userDetails");
let userImg = document.getElementById("userimg");

let user = document.getElementById("user");
const apiCall = () => {
    userDetails.innerHTML = "";
    fetch("https://randomuser.me/api/").then((res) => res.json()).then((val) => {
        userData = val.results[0];
        console.log(userData);
        console.log(userDetails)
        userImg.src = userData.picture.thumbnail
        user.innerHTML = `${userData.name.title} ${userData.name.first} ${userData.name.last}`
        console.log(userDetails)
    }
    );
}
apiCall();
const handleAge = () => {
    userDetails.innerHTML = userData.dob.age;
}
const handleEmail = () => {
    userDetails.innerHTML = userData.email;
}
const handlePhone = () => {
    userDetails.innerHTML = userData.phone;
}
document.getElementById("getUser").addEventListener("click", () => {
    apiCall();
})
