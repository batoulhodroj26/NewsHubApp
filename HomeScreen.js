// Example render logic
document.getElementById("root").innerHTML = "<h2>Loading News...</h2>";

// Fetch and display articles (you’ll call your NewsApi functions here)
fetchNews();

function fetchNews() {
  getTopHeadlines().then(articles => {
    document.getElementById("root").innerHTML = articles.map(article => renderArticle(article)).join('');
  }).catch(error => {
    document.getElementById("root").innerHTML = "<p>Failed to load news.</p>";
    console.error(error);
  });
}