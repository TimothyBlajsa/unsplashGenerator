const numImagesAvailable = 988  //how many photos are total in the collection
const numItemsToGenerate = 1; //how many photos you want to display
const imageWidth = 480;    //image width in pixels
const imageHeight = 480;   //image height in pixels
const galleryContainer = document.querySelector('.gallery-container')

function renderGalleryItem(){
    const query = document.getElementById('search').value;
    console.log(query)

    fetch(`https://source.unsplash.com/random/${imageWidth}x${imageHeight}/?${query}`)
    .then((response) => {
      let galleryItem = document.createElement('span');
      galleryItem.classList.add('gallery-item');
      galleryItem.innerHTML = `
        <img class="gallery-image" src="${response.url}" alt="gallery image"/>
        `
      galleryContainer.append(galleryItem);
  })
}

for(let i=0; i < numItemsToGenerate; i++){
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
    renderGalleryItem(randomImageIndex);
}