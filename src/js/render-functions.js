import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


export function renderImages(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    if (images.length === 0) {
        showNoImagesMessage();
        return;
    }

    const lightbox = new SimpleLightbox('.image-card a');

    images.forEach(image => {
        const card = createImageCard(image);
        gallery.appendChild(card);
    });
    lightbox.refresh();
}

function createImageCard(image) {
    const card = document.createElement('div');
    card.classList.add('image-card');

    const a = document.createElement('a');
    a.href = image.largeImageURL;

    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;

    const likes = document.createElement('p');
    likes.textContent = `Likes: ${image.likes}`;

    const views = document.createElement('p');
    views.textContent = `Views: ${image.views}`;

    const comments = document.createElement('p');
    comments.textContent = `Comments: ${image.comments}`;

    const downloads = document.createElement('p');
    downloads.textContent = `Downloads: ${image.downloads}`;

    card.appendChild(img);
    card.appendChild(likes);
    card.appendChild(views);
    card.appendChild(comments);
    card.appendChild(downloads);

    return card;
}

function showNoImagesMessage() {
    iziToast.error({
        title: 'Sorry!',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight'
    });
}