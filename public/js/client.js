fetch('/api/v0/furnitures')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(furnitures){
    // Any code that depends on the `data` must go in this block
    let output = '';

const gallery = document.querySelector('.gallery');

furnitures.forEach(function(furnitures) {
  
output +=
    `<figure>
      <img src="${furnitures.pathURL}" alt="pexels:${furnitures.title}" width='${furnitures.width}px' height='${furnitures.height}px'>
      <figcaption>
        <h1>${furnitures.title}</h1>
        <h2>${furnitures.description}</h2>
        <a href="${furnitures.creditURL}" target="_blank">Design by ${furnitures.credit}</a>
        <a href="${furnitures.linkURL}" target="_blank">More Info</a>
      </figcaption>
    </figure>`;
});

gallery.innerHTML = output;
  })

  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });

