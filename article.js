// Sample content; replace it with your actual data source
const articleData = [
    { id: 1, title: 'Breaking News 1', content: 'Anumula Revanth Reddy, the firebrand local leader who steered the Congress to its first victory in Telangana, was named on Tuesday as the next chief minister of the southern state.' },
    { id: 2, title: 'News 2', content: 'A break for Jasprit Bumrah: Team India mulling when to give their biggest match winner some rest.' },
    { id: 3, title: 'Technology Update', content: 'Quess Corp to sell entire stake in unit Qdigi Svcs to Onsite Electro for ₹80 cr: Report.' },
];

// Function to find the selected article
function findSelectedArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));
    return articleData.find(article => article.id === articleId);
}

// Function to render the selected article
function renderArticle() {
    const articleSection = document.getElementById('articleSection');
    const selectedArticle = findSelectedArticle();

    if (selectedArticle) {
        const articleContent = document.createElement('div');
        articleContent.innerHTML = `
            <h2>${selectedArticle.title}</h2>
            <p>${selectedArticle.content}</p>
        `;
        articleSection.appendChild(articleContent);
    } else {
        // Handle the case when the article is not found
        console.error('Selected article not found');
    }
}

// Call the function to render the article on page load
window.onload = renderArticle;
