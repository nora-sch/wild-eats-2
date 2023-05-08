
restaurants.forEach((resto)=>{
  console.log(resto.description.trim().length)
const section = document.querySelector("section")
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
        <i class="fa-solid fa-star full-star"></i
        ><i class="fa-solid fa-star full-star"></i
        ><i class="fa-solid fa-star full-star"></i
        ><i class="fa-solid fa-star full-star"></i
        ><i class="fa-solid fa-star empty-star"></i>
      </div>
      <div class="resto-card-filters">
        <p>${resto.specialite}</p>
        <p>${resto.regime.map(regime=>firstToUpperCase(regime)).join(' • ')}</p>
      </div>
    </div>
    <div class="resto-card-btn-wrapper">
      <div class="btn-organisation take-away">lorem</div>
      <div class="btn-organisation on-place">loremipsumler</div>
      <div class="btn-organisation delivery">lorempom</div>
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

// stars, delivery buttons, regimes to uppercase, why other cards has no sliced description?
// if not website - cacher l'icone
// trim url to its domain name


{/* <div class="resto-card">
<div class="resto-card-img">
  <img
    src="https://media.discordapp.net/attachments/1098254523581075487/1098901457425670154/emy-XoByiBymX20-unsplash.jpg?width=702&height=468"
    alt="resto_img"
  />
</div>
<div class="resto-card-info">


  <div class="resto-card-header">
    <div class="resto-card-title-wrapper">
      <h2 class="title">Lorem ipsum</h2>
      <div class="resto-card-star-div">
        <i class="fa-solid fa-star full-star"></i
        ><i class="fa-solid fa-star full-star"></i
        ><i class="fa-solid fa-star full-star"></i
        ><i class="fa-solid fa-star full-star"></i
        ><i class="fa-solid fa-star empty-star"></i>
      </div>
      <div class="resto-card-filters">
        <p>Lorem ipsum</p>
        <p>dolor si amet</p>
      </div>
    </div>
    <div class="resto-card-btn-wrapper">
      <div class="btn-organisation take-away">lorem</div>
      <div class="btn-organisation on-place">loremipsumler</div>
      <div class="btn-organisation delivery">lorempom</div>
    </div>
  </div>


  <div class="resto-card-main">
    <div class="resto-card-description">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        obcaecati minus non offi ducimus facere, doloremque laudantium
        ipsum commodi fuga ea praesentium volup itaque facilis optio
        reiciendis quae magnam est?    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        obcaecati minus non offi ducimus facere, doloremque laudantium
        ipsum commodi fuga ea praesentium volup itaque facilis optio
        reiciendis quae magnam est? <span>[...]</span>
      </p>
    </div>

    <div class="resto-card-contacts">
      <i class="fa-solid fa-location-dot contact-icon"></i>
      <p>address</p>
      <i class="fa-solid fa-mobile-screen-button contact-icon"></i>
      <p>numero telephone</p>
      <i class="fa-solid fa-desktop contact-icon"></i>
      <p>web</p>
    </div>
  </div>
</div>
</div> */}
