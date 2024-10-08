document.addEventListener("DOMContentLoaded", async () => {
  console.log("welcome to posts js");
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("id");
  const userName = params.get("name");

  const spanUserNameElm = document.getElementById("userName");
  spanUserNameElm.textContent = userName;

  const getPostsById = (id) => {
    const path = "../../assets/images/1.png";
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((res) => res.json())
      .then((posts) => {
        posts.forEach((post, i) => {
          const newPostHTML = `<div class="post-card">
            <h3 class="post-title">${post.title.toUpperCase()}</h3>
            <figure>
              <img
                src="../imgs/${i + 1}.png"
                alt="post-image"
                srcset=""
                class="post-image"
              />
              <figcaption>An image from nature</figcaption>
            </figure>
            <article class="post-body">${post.body} ${post.body} ${
            post.body
          }</article>
          </div>`;
          document.querySelector(".posts-container").innerHTML += newPostHTML;
        });
      });
  };
  await getPostsById(userId);
});
