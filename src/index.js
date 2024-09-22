window.addEventListener("DOMContentLoaded", () => {
  const userCards = document.querySelectorAll(".user-card");
  let users = [];
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => (users = data))
    // .then(() => console.log(users))
    .then(() => users.forEach((user) => setUserData(user)));

  const setUserData = (user) => {
    const userCard = document.getElementById(user.id);
    userCard.querySelector("#user-name").textContent = user.name;
    userCard.querySelector("#user-phone").textContent = user.phone;
    userCard.querySelector("#user-site").textContent = user.website;
    userCard.querySelector("#user-email").textContent = user.email;
  };
});
