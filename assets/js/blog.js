document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p>By: ${post.username}</p>`;
        postsContainer.appendChild(postElement);
    });

    document.getElementById('toggle-theme').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    document.getElementById('back-button').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});