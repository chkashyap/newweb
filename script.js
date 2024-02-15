const newsData = [
    { title: 'Breaking News 1', image: 'revanth.jpg', content: 'Anumula Revanth Reddy, the firebrand local leader who steered the Congress to its first victory in Telangana, was named on Tuesday as the next chief minister of the southern state.' },
    { title: 'sports news', image: 'bumrah.jpg', content: 'A break for Jasprit Bumrah: Team India mulling when to give their biggest match winner some rest.' },
    { title: 'stock news', image: 'stock.jpg', content: 'Quess Corp to sell entire stake in unit Qdigi Svcs to Onsite Electro for ₹80 cr: Report.' },
    { title: 'entertainment news', image: 'prabhas.jpg', content: 'Prabhas and Prithviraj Sukumaran and helmed by Prashanth Neel, Salaar Part 1: Ceasefire turned out to be a massive  blockbuster upon its release in December last year and earned Rs 615 crore worldwide, as per the industry tracker Sacnilk. The film had its streaming release on Netflix in Tamil, Telugu, Kannada, and Malayalam versions in January..' },
    { title: 'movie news', image: 'rajini.jpg', content: 'Rajinikanth is a proud dad as he watches the trailer of daughter Aishwarya’s Lal Salaam. Watch video.' },
    { title: 'technology news', image: 'vision pro.jpg', content: 'Apple Vision Pro is a mixed reality headset developed by Apple Inc. Announced on June 5, 2023.' },
];

function renderNews() {
    const newsSection = document.getElementById('newsSection');

    newsData.forEach((news, index) => {
        const article = document.createElement('article');
        const articleLink = document.createElement('a');
        articleLink.href = `article${index + 1}.html`;  // Update the link to point to the corresponding article HTML page
        articleLink.innerHTML = `
            <img src="${news.image}" alt="${news.title}">
            <h2>${news.title}</h2>
            <p>${news.content}</p>
        `;
        article.appendChild(articleLink);
        newsSection.appendChild(article);
    });

}

window.onload = renderNews;
