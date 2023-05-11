// RESTO CARDS

const displayRestaurants = (restaurants) => {
  const section = document.querySelector(".resto-card-wrapper");
  section.innerHTML = "";
  if (restaurants.length > 0) {
    restaurants.forEach((resto) => {
      section.insertAdjacentHTML(
        "beforeend",
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
        ${displayStars(
          resto.note,
          ' <i class="fa-solid fa-star full-star"></i>',
          '<i class="fa-solid fa-star empty-star"></i>'
        )}
        </div>
        <div class="resto-card-filters">
          <p>${resto.specialite}</p>
          <p>${resto.regime
            .map((regime) => firstToUpperCase(regime))
            .join(" • ")}</p>
            <p>${resto.prix} €</p>
        </div>
      </div>
      <div class="resto-card-btn-wrapper">
      ${
        resto.organisation.livraison
          ? '<div class="btn-organisation delivery">Livraison</div>'
          : ""
      }
      ${
        resto.organisation.aEmporte
          ? '<div class="btn-organisation take-away">A emporter</div>'
          : ""
      }
      ${
        resto.organisation.surPlace
          ? '<div class="btn-organisation on-place">Sur place</div>'
          : ""
      }
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
        <p><a href="${resto.website}">${resto.website.slice(
          0,
          resto.website.indexOf("/", 10)
        )}</a></p>
      </div>
    </div>
  </div>
</div>
  

`
      );
    });
    // CUT TEXT

    let cardDescriptions = document.querySelectorAll(
      ".resto-card-description p"
    );
    // put in main dom file? slice dynamicaly by its id?

    cardDescriptions.forEach((card) => {
      const slicedTextRestoCard = card.textContent.slice(
        0,
        card.textContent.indexOf(" ", 260)
      );
      card.innerHTML = `${slicedTextRestoCard} ${
        slicedTextRestoCard.trim().length !== 0 ? "<span>[...]</span>" : ""
      }`;
    });
  } else {
    section.insertAdjacentHTML(
      "beforeend",
      `Pas de restaurant trouvé avec vos filtres choisis!`
    );
  }
};

// add price to cards
// top10 border round
// filter buttons
// button to top
// search bar on select - clears the content
// if not website - cacher l'icone
// trim url to its domain name
// add organisation filtre
// display top 10
// carousel
// resto page
// recommendations
// plan de la ville

// TOP 10
const displayTop10 = (restaurants, index = 0) => {
  const top10Wrapper = document.querySelector(".top10-wrapper");
  top10Wrapper.innerHTML = `
  <div class="carousel-btns"> </div>`;
  const buttonWrapper = document.querySelector(".carousel-btns");
  if (restaurants.length > 0) {
    restaurants.forEach((resto, key) => {
      buttonWrapper.insertAdjacentHTML(
        "beforeend",
        `
    ${
      index === key
        ? `<button class="carousel-btn btn-active" id="top10-${key}"></button>`
        : `<button class="carousel-btn" id="top10-${key}"></button>`
    }
  `
      );
    });

    top10Wrapper.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="top10-img">
      <h1>TOP 10</h1>
    </div>
    <div class="top10-right">
      <div class="top10-top-section">
        <div class="top10-header">
          <div class="top10-title-wrapper">
            <h2 class="title">${restaurants[index].nom}</h2>
            <div class="top10-star-div">
            ${displayStars(
              restaurants[index].note,
              ' <i class="fa-solid fa-star full-star"></i>',
              '<i class="fa-solid fa-star empty-star"></i>'
            )}
            </div>
            <div class="top10-filters">
              <p>${restaurants[index].specialite}</p>
              <p>${restaurants[index].regime
                .map((regime) => firstToUpperCase(regime))
                .join(" • ")}</p>
              <p>${restaurants[index].prix}€</p>
            </div>
          </div>
          <div class="top10-btn-wrapper">
          ${
            restaurants[index].organisation.livraison
              ? '<div class="btn-organisation delivery">Livraison</div>'
              : ""
          }
          ${
            restaurants[index].organisation.aEmporte
              ? '<div class="btn-organisation take-away">A emporter</div>'
              : ""
          }
          ${
            restaurants[index].organisation.surPlace
              ? '<div class="btn-organisation on-place">Sur place</div>'
              : ""
          }
          </div>
        </div>

        <div class="top10-description">
          <p>
          ${restaurants[index].description}
          </p>
        </div>
      </div>
      <div class="top10-contacts">
        <i class="fa-solid fa-location-dot contact-icon"></i>
        <p>   ${restaurants[index].adresse}</p>
        <i class="fa-solid fa-mobile-screen-button contact-icon"></i>
        <p>   ${restaurants[index].telephone}</p>
        <i class="fa-solid fa-desktop contact-icon"></i>
        <p>   ${restaurants[index].website}</p>
      </div>
    </div>`
    );
  }
  //CUT TEXT
  let top10description = document.querySelector(".top10-description p");
  const slicedTextTop10 = top10description.textContent.slice(
    0,
    top10description.textContent.indexOf(" ", 400)
  );
  top10description.innerHTML = `${slicedTextTop10} <span>[...]</span>`;
  //CHANGE BG IMG
  const top10img = document.querySelector('.top10-img');
  top10img.style.backgroundImage = `url(${restaurants[index].mainImage})`;
};

export { displayRestaurants, displayTop10 };

