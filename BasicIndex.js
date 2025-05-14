document.addEventListener("DOMContentLoaded", async () => {
  const articles = await fetchArticles();
  renderArticles(articles);
});

function handleSearch() {
  const keyword = document.getElementById("searchInput").value.trim();
  if (keyword) {
    searchByKeyword(keyword).then(renderArticles);
  }
}