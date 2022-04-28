import { galleryItems } from './gallery-items.js';
// Change code below this line

//////////////////////// Create markup///////////////////////////
const containerRef = document.querySelector('.gallery');


function createImageItem(images) {
  return images.map(image => {
    return `<div class="gallery__item"><a class="gallery__link" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" data-source="${image.original}"
    alt="${image.description}"/></a></div>`
  }).join('');
}

const createdImages = createImageItem(galleryItems); 

containerRef.innerHTML = createdImages;

//////////////////Add event listener on parent container///////////////////////

containerRef.addEventListener('click', onParentGalleryClick);

function onParentGalleryClick(e) {
  e.preventDefault();
 
 if (e.target.nodeName !== 'IMG') {
  return;
  };
  const img = e.target;

  createModal(img.dataset.source);
  
}

//////////Create modal////////////////

function createModal(image) {

  const modalImg = basicLightbox.create(`
    <img src="${image}" class="image-original">
`);
  modalImg.show();

}

  document.addEventListener('keypress', function (e) {
    if(e.keyCode === 27) document.querySelector('.image-original').hidden= 1;
  }); 

// <script>
  //document.addEventListener('keypress', function (e) {
    //if(e.keyCode === 27) document.getElementById('modal_id').hidden= 1;
  //}); 
//</script> 