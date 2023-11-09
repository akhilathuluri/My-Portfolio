// Replace 'YOUR_DEVTO_API_KEY' with your actual dev.to API key
const apiKey = 'cPNvcFcL2FNvirtrZzwt9Bek';
const username = 'akhilathuluri';

const devtoEndpoint = `https://dev.to/api/articles?username=${username}`;

fetch(devtoEndpoint, {
    headers: {
        'api-key': apiKey
    }
})
.then(response => response.json())
.then(data => {
    const blogPosts = document.getElementById('blog-posts');

    data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;

        const postDescription = document.createElement('p');
        postDescription.textContent = post.description || 'No description available';

        const postLink = document.createElement('a');
        postLink.href = post.url;
        postLink.textContent = 'Read More';

        postElement.appendChild(postTitle);
        postElement.appendChild(postDescription);
        postElement.appendChild(postLink);
        blogPosts.appendChild(postElement);
    });
})
.catch(error => console.error('Error fetching dev.to articles:', error));
