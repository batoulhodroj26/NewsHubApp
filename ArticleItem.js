function renderArticle(article) {
  return `
    <div style="border:1px solid #ccc; padding:10px; margin:10px;">
      <h3>${article.title}</h3>
      <p>${article.description || ''}</p>
      <a href="${article.url}" target="_blank">Read more</a>
    </div>
  `;
}