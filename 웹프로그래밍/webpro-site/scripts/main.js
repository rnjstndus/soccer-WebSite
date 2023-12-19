function searchYouTube() {
    const apiKey = 'AIzaSyArtDjxuPQleJjT20CO_PHgjMsqBfoi0Zg';
    const searchInput = document.getElementById('searchInput');
    const searchQuery = searchInput.value.trim();

    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=${encodeURIComponent(searchQuery)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displaySearchResults(data.items))
        .catch(error => console.error('오류:', error));
}

function displaySearchResults(results) {
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = '';

    if (results && results.length > 0) {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${result.id.videoId}" frameborder="0" allowfullscreen></iframe>`;
            searchResultsDiv.appendChild(resultItem);
        });
    } else {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.textContent = '검색 결과가 없습니다.';
        searchResultsDiv.appendChild(noResultsMessage);
    }
}