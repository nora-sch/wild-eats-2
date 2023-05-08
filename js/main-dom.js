const displayRestaurants=(restaurants)=>{
const section = document.querySelector(".resto-card-wrapper")
section.innerHTML = '';
restaurants.forEach((resto)=>{
section.insertAdjacentHTML("beforeend", 
`
<div class="resto-card" id="resto-${resto.id}">
  <div class="resto-card-img">
    <img
      src="${resto.mainImage}"
      alt="${resto.nom} main image"
    />
  </div>

  <div class="resto-card-info">
    <div class="resto-card-header">
      <div class="resto-card-title-wrapper">
        <h2 class="title">${resto.nom}</h2>
        <div class="resto-card-star-div">
        ${displayStars(resto.note, ' <i class="fa-solid fa-star full-star"></i>','<i class="fa-solid fa-star empty-star"></i>' )}
        </div>
        <div class="resto-card-filters">
          <p>${resto.specialite}</p>
          <p>${resto.regime.map(regime=>firstToUpperCase(regime)).join(' • ')}</p>
        </div>
      </div>
      <div class="resto-card-btn-wrapper">
      ${resto.organisation.livraison?'<div class="btn-organisation delivery">Livraison</div>':''}
      ${resto.organisation.aEmporte?'<div class="btn-organisation take-away">A emporter</div>':''}
      ${resto.organisation.surPlace?'<div class="btn-organisation on-place">Sur place</div>':''}
      </div>
    </div>

    <div class="resto-card-main">
      <div class="resto-card-description">
        <p>
        ${resto.description}
        </p>
      </div>

      <div class="resto-card-contacts">
        <i class="fa-solid fa-location-dot contact-icon"></i>
        <p>${resto.adresse}</p>
        <i class="fa-solid fa-mobile-screen-button contact-icon"></i>
        <p>${resto.telephone}</p>
        <i class="fa-solid fa-desktop contact-icon"></i>
        <p><a href="${resto.website}">${resto.website.slice(0, resto.website.indexOf('/', 10))}</a></p>
      </div>
    </div>
  </div>
</div>
  

`)
})
 // CUT TEXT
 let top10description = document.querySelector('.top10-description p');
 let cardDescriptions = document.querySelectorAll('.resto-card-description p');
 // put in main dom file? slice dynamicaly by its id?
 const slicedTextTop10 = top10description.textContent.slice(0, top10description.textContent.indexOf(' ', 600));
 top10description.innerHTML = `${slicedTextTop10} <span>[...]</span>`;
 
 cardDescriptions.forEach(card => {
   const slicedTextRestoCard = card.textContent.slice(0, card.textContent.indexOf(' ', 260));
   card.innerHTML = `${slicedTextRestoCard} ${slicedTextRestoCard.trim().length !== 0 ? '<span>[...]</span>':''}`;
 })
 
}
// search bar on select - clears the content
// if not website - cacher l'icone
// trim url to its domain name
// add organisation filtre
// display top 10
// carousel
// resto page
// recommendations
// plan de la ville

export {
  displayRestaurants
}