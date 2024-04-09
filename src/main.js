
import { searchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();
    
    if (query === '') {
        iziToast.warning({
            title: 'Warning!',
            message: 'Please enter a search query',
            position: 'topCenter'
        });
        return;
    }
    
    loader.style.display = 'block';

    searchImages(query)
        .then(data => {
            const images = data.hits; 
            renderImages(images); 
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            loader.style.display = 'none';
        });
});