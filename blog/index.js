document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("post-form");
    const blogPosts = document.getElementById("blog-posts");

    postForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        if (title && content) {
            createPost(title, content);
            postForm.reset();
        } else {
            alert("Both title and content are required!");
        }
    });

    function createPost(title, content) {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        const postTitle = document.createElement("h3");
        postTitle.textContent = title;

        const postContent = document.createElement("p");
        postContent.textContent = content;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);

        blogPosts.appendChild(postDiv);
    }
});