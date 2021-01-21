// HOME CODE
if (document.getElementById("home")) {
  // Hover over "me" color swap.
  document.getElementById("me").onmouseover = function () {
    meColor();
  };

  function meColor() {
    document.getElementById("me").src = "images/me-color.png";
  }

  // Hover out "me" monochrome swap.
  document.getElementById("me").onmouseout = function () {
    meMono();
  };

  function meMono() {
    document.getElementById("me").src = "images/me-mono.png";
  }
}

// POST CODE

// Append all the published blog posts.
function appendPosts(data) {
  console.log(data.posts);
  for (let i = 0; i < data.posts.length; i++) {
    let postName = data.posts[i].postName;
    let postPath = data.posts[i].postPath;
    let node = document.createElement("li");
    let nodeText = document.createTextNode("- ");
    node.appendChild(nodeText);
    let nodeA = document.createElement("a");
    // nodeA.target = "_blank";
    nodeA.href = postPath;
    nodeA.innerText = postName;
    nodeA.classList.add("post-links");
    node.appendChild(nodeA);
    document.getElementById("posts").appendChild(node);
  }
}

// Fetch all the published blog posts.
fetch("../posts/posts.json")
  .then((response) => response.json())
  .then((data) => appendPosts(data));
