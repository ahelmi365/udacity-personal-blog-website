document.addEventListener("DOMContentLoaded", async () => {
  console.log("welcome to posts js");
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("id");
  const userName = params.get("name");

  const spanUserNameElm = document.getElementById("userName");
  spanUserNameElm.textContent = userName;

  const getPostsById = async (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((res) => res.json())
      .then((posts) => {
        posts.forEach((post) => {
          const newPostHTML = `
          <div class="post-card">
            <h3 class="post-title">${post.title.toUpperCase()}</h3>
            <p class="post-body">${post.body} ${post.body} ${post.body}</p>
          </div>`;
          document.querySelector(".posts-container").innerHTML += newPostHTML;
        });
      });
  };
  await getPostsById(userId);
});
