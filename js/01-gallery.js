import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

//console.log(galleryContainer)

// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>

const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item" >
<a class="gallery__link" href="${original}">
<img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
</a>
</li>`
);

galleryContainer.insertAdjacentHTML("beforeend", markup.join(""));

galleryContainer.addEventListener("click", onClick)

function onClick(event){
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") {
        return;
    }
//console.log(event.target);
    const largeImg = event.target.dataset.source;
    console.log(largeImg);
   
 const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${largeImg}" width = "500" >
    </div>
`);

    instance.show();

    document.addEventListener('keydown', onEscapePress);

function onEscapePress(event) {
    if (event.code === 'Escape') {
        instance.close();
    }
    document.removeEventListener('keydown', onEscapePress);
   
}
    

}
 

//console.log(galleryItems);

