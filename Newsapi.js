function getTopHeadlines() {
  const apiKey = 'YOUR_API_KEY'; // Replace with your NewsAPI key
  const url = https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey};

  return fetch(url)
    .then(response => response.json())
    .then(data => data.articles);
}