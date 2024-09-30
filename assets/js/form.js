document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!username || !title || !content) {
        alert('Please complete the form.');
        return;
    }

    const blogPost = { username, title, content };
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(blogPost);
    localStorage.setItem('posts', JSON.stringify(posts));

    window.location.href = 'blog.html';
});

document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});