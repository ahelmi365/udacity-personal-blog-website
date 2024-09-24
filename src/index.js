window.addEventListener("DOMContentLoaded", () => {
  const getUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        users.forEach((user) => {
          setUserData(user);
          setSideBarUserNames(user);
        });
      });
  };
  getUserData();

  const userCardsContainer = document.getElementById("user-cards-container");
  const setUserData = (user) => {
    const userCardHTML = `
      <div class="user-card" id=${user.id}>
        <h3 class="card-title" id="user-name">${user.name}</h3>
        <div id="card-body">
          <p id="user-phone"><span class="bold-text">Tel:</span> ${user.phone}</p>
          <p id="user-site"><span class="bold-text">Website:</span> ${user.website}</p>
          <p id="user-email"><span class="bold-text">Email:</span> ${user.email}</p>
          
            <a href="./user-posts/index.html?id=${user.id}&name=${user.name}" 
            id="userDetailsLink">
            <button>Check Posts</button>
            </a>
          
        </div>
      </div>
    `;
    userCardsContainer.innerHTML += userCardHTML;
  };

  const sideBarUserNamesElm = document.getElementById("side-bar-user-list");
  const setSideBarUserNames = (user) => {
    const newLiElm = `
    <li>
      <a href="./user-posts/index.html?id=${user.id}&name=${user.name}">${user.name}</a>
    </li>
    `;
    sideBarUserNamesElm.innerHTML += newLiElm;
  };
});
