import {
  getTop10,
  getAllNoteDesc,
  getAllNoteAsc,
  getAllPriceAsc,
  getAllFiltersToDisplay,
  getByMaxPrice,
  getBySpeciality,
  getByDiet,
  searchByName,
} from "./filters.js";

window.addEventListener("DOMContentLoaded", () => {
  let dataToDisplay = restaurants;
  console.log(dataToDisplay);

  const allFiltersToDisplay = getAllFiltersToDisplay(restaurants);
  console.log(allFiltersToDisplay);

  const restaurantTop10 = getTop10(restaurants); // restaurant Top 10
  const top10Length = getTop10(restaurants).length; // nb of restaurants

  // CUT TEXT
  let top10description = document.querySelector('.top10-description p');
  let cardDescriptions = document.querySelectorAll('.resto-card-description p');
  // put in main dom file? slice dynamicaly by its id?
  const slicedTextTop10 = top10description.textContent.slice(0, top10description.textContent.indexOf(' ', 600));
  top10description.innerHTML = `${slicedTextTop10} <span>[...]</span>`;
  
  cardDescriptions.forEach(card => {
    const slicedTextRestoCard = card.textContent.slice(0, card.textContent.indexOf(' ', 280));
    console.log(card.textContent.length);
    card.innerHTML = `${slicedTextRestoCard} ${slicedTextRestoCard.trim().length !== 0 ? '<span>[...]</span>':''}`;
  })
  

  
  // FILTER FACTORY

  const resetFilters = () => {
    return {
      sortBy: "All",
      speciality: [],
      diet: [],
      organisation: [],
      maxPrice: allFiltersToDisplay.price,
    };
  };

  let filters = resetFilters();

  // FORM VALUES
  let filterForm = document.forms["filter-form"];

  filterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submitted");

    // SORT
    let sort = document.getElementsByName("sortBy");
    let sortValue;
    for (var i = 0; i < sort.length; i++) {
      if (sort[i].checked) {
        sortValue = sort[i].value;
      }
    }
    if (sortValue) filters.sortBy = sortValue;

    // CHECK
    let checkBoxes = document.querySelectorAll(".form-checkbox");
    let checkedBoxes = [];
    for (let box of checkBoxes) {
      if (box.checked == true) {
        checkedBoxes.push(box.value);
      }
    }
    filters.speciality = checkedBoxes;
    // console.log(checkedBoxes);

    // SLIDER
    filters.maxPrice = parseInt(document.querySelector(".slider").value);

    console.log(filters);

    // DISPLAY FILTERED RESULTS
    const filteredResult = (filters, restaurants) => {
      let returnRestaurants;
      // SortBy
      switch (filters.sortBy) {
        case "MeilleuresNotes":
          returnRestaurants = getAllNoteDesc(restaurants);
          break;
        case "Prix":
          returnRestaurants = getAllPriceAsc(restaurants);
          break;
        default:
          returnRestaurants = restaurants;
      }
      // console.log(returnRestaurants);
      // Speciality
      returnRestaurants = getBySpeciality(
        returnRestaurants,
        filters.speciality
      );
      // console.log(returnRestaurants);
      // Diet
      returnRestaurants = getByDiet(returnRestaurants, filters.speciality);
      // Price
      returnRestaurants = getByMaxPrice(returnRestaurants, filters.maxPrice);
      return returnRestaurants;
    };
    dataToDisplay = filteredResult(filters, restaurants);
    console.log(dataToDisplay);
  });

  // RESET
  filterForm.addEventListener("reset", (event) => {
    console.log("reset");
    document.querySelector("#slider-value").textContent =
      allFiltersToDisplay.price;
    filters = resetFilters();
    dataToDisplay = restaurants;
    console.log(filters);
    console.log(dataToDisplay);
  });

  console.log(filters);
});

// SEARCHBAR
const searchBar = document.querySelector("#search-field");

searchBar.addEventListener("change", (e) => {
  let res = searchByName(restaurants, e.currentTarget.value);
  if (res.length > 0) {
    console.log(res);
  } else {
    console.log("Pas de restaurant avec ce nom!");
  }
});
