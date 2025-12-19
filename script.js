const postsList = document.getElementById('posts-list');
const postForm = document.getElementById('post-form');

let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

function renderPosts() {
  postsList.innerHTML = '';
  posts.forEach((post, index) => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post-preview';
    postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content.substring(0, 100)}...</p>`;
    postDiv.addEventListener('click', () => alert(`Title: ${post.title}\n\n${post.content}`));
    postsList.appendChild(postDiv);
  });
}

postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (!title || !content) return;

  posts.unshift({ title, content });
  localStorage.setItem('blogPosts', JSON.stringify(posts));
  renderPosts();

  postForm.reset();
});

renderPosts();
