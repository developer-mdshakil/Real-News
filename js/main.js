//here declare loadNewsApi by server base
const loadNewsApi = async() => {
    try{
        const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-08-17&sortBy=publishedAt&apiKey=7a2407f14c5d4f7595f023e9a36d53b6`;
    
    const response = await fetch(url);
    const data = await response.json();
    displayNews(data.articles);
    }catch(error){
        console.log(error);
    }
}

const displayNews = news => {
    console.log(news);
    const cardContainer = document.getElementById('card-Container');
    cardContainer.textContent = '';
    if(news.length > 30){
        news = news.slice(0, 30);
    }
    news.forEach(data => {
        const cardBox = document.createElement('div');
        cardBox.classList.add('card', 'w-full', 'bg-base-100', 'shadow-xl')
        cardBox.innerHTML = `
        <figure><img class="w-full h-56" src="${data.urlToImage ? data.urlToImage : 'Not found'}" alt="" /></figure>
        <div class="card-body">
            <h2 class="card-title">
            ${data.title ? data.title : 'Not found'}
            </h2>
            <p>${data.content}</p>
            <div class="card-actions">
            <div title="${data.source.name ? data.source.name : 'not found'}"><h3  class="text-xl font-medium mb-4">Author: ${data.author ? data.author : 'Not found author'}</h3>
            <p>Published-Data: ${data.publishedAt ? data.publishedAt : 'Not found'}</p>
            </div> 
            </div>
        </div>
        `;
        cardContainer.appendChild(cardBox);
    });
}

//call here loadNewsApi 
loadNewsApi();