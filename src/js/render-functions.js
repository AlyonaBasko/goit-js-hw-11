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

    const details = document.createElement('div');
    details.classList.add('details');

    const likes = document.createElement('div');
    likes.classList.add('detail');
    likes.innerHTML = `Likes: ${image.likes}`;

    const views = document.createElement('div');
    views.classList.add('detail');
    views.innerHTML = `Views: ${image.views}`;

    const comments = document.createElement('div');
    comments.classList.add('detail');
    comments.innerHTML = `Comments: ${image.comments}`;

    const downloads = document.createElement('div');
    downloads.classList.add('detail');
    downloads.innerHTML = `Downloads: ${image.downloads}`;

    a.appendChild(img);
    card.appendChild(a);

    details.appendChild(likes);
    details.appendChild(views);
    details.appendChild(comments);
    details.appendChild(downloads);
    card.appendChild(details);

    return card;
}

function showNoImagesMessage() {
    iziToast.error({
        title: 'Sorry!',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight'
    });
}