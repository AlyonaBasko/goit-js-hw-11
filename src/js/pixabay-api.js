
const API_KEY = '43249978-ed8444d52eae2c923645cb9a6';

export async function searchImages(query) {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        return data.hits;
    } catch (error) {
        console.error(error);
        return [];
    }
}