const posts = [
    {
    
    name: "Web Ginius",
    username: "ginius2023",
    location: "Kabul, Afghanistan",
    avatar: "images/web-ginius.jpg",
    post: "images/first-post.jpg",
    comment:
      " This is the design of commercial website that designed by Web Ginius company",
    likes: 50,
    },
    {
      name: "Code World",
      username: "code2020",
      location: "Torento, Canada",
      avatar: "images/cold-wolrd-profile.jpg",
      post: "images/second-post.jpg",
      comment: "Web Development program",
      likes: 14,
    },
    {
      name: "AB Design",
      username: "abdesign_20",
      location: "Colforenia, USA",
      avatar: "images/Izaan-profile.jpg",
      post: "images/fourth-post.jpg",
      comment: "Quality is more importent than quantity, so instead of deaily reels, learn how to work smart.",
      likes: 200,
     
    },
    {
        name: "Code Community",
        username: "code_2000",
        location: "Kabul , Afghanistan",
        avatar: "images/code-community-profile.jpg",
        post: "images/fifth-post.jpg",
        comment: "Create beatiful Design using html, css and java script",
        likes: 20,
    },
  ];
  const container = document.querySelector(".container");
  for (let i = 0; i < posts.length; i++) {
    addNewPost(i);
  }
  
  function addNewPost(index) {
    let newPost = document.createElement("section");
    newPost.classList.add("card");
    container.append(newPost);
    newPost.innerHTML = `<div class="card-header">
    <img
      class="avatar"
      src="${posts[index].avatar}"
      alt="vangogh avatar"
    />
    <div class="header-text">
      <p class="name bold">${posts[index].name}</p>
      <p class="location">${posts[index].location}</p>
    </div>
  </div>
  <img
    class="post"
    src=${posts[index].post}
    alt="van gogh portret"
  />
  <div class="comment-section">
    <div class="buttons">
      <img src="./images/icon-heart.png" alt="like icon" class="like" />
      <img
        src="./images/icon-comment.png"
        alt="comment icon"
        class="comment"
      />
      <img src="./images/icon-dm.png" alt="dm icon" class="dm" />
    </div>
    <p class="bold"><span class="count">${posts[index].likes}</span> likes</p>
    <p>
      <span class="username bold">${posts[index].username}</span> ${posts[index].comment}
    </p>
  </div>`;
  }
  