
const API_KEY = '43249978-ed8444d52eae2c923645cb9a6';

export function searchImages(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    });

    return fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(error => {
        console.log(error);
        throw error;
    });
}

 