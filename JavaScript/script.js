import { updateLS } from "./utils.js";

// Load saved slotcars from localStorage
// If nothing exists yet, use an empty array
let allSlotcars = JSON.parse(localStorage.getItem('savedSlotcars')) || [];

// =========================
// RENDER SLOT CARS
// =========================
// Displays slotcars in the DOM
function showSlotcars(list = allSlotcars) {
    const container = document.querySelector(".items");

    // If no items → show message
    if (list.length === 0) {
        container.innerHTML = '<p>Nog geen slotcars gevonden</p>';
        return;
    }

    // Generate HTML for each slotcar
    container.innerHTML = list.map(slot => `
        <article id="${slot.id}" class="${slot.state}">
            <div class="info">
                <h2 class="maker">${slot.maker}</h2>
                <p class="car-class">${slot.carClass}</p>
                <p class="brand">${slot.brand}</p>
                <p class="scale">${slot.scale}</p>
                <p class="color">${slot.color}</p>
                <p class="price">€${slot.price}</p>
            </div>
            <img src="img/${slot.brand}_logo.png" alt="${slot.brand} logo">
            <button class="delete-btn" data-id="${slot.id}"><i class="fa-solid fa-trash"></i></button>
        </article>
    `).join('');

    // Add click event to each delete button
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", deleteSlotcar);
    });
}

// =========================
// DELETE SLOT CAR
// =========================
// Removes a slotcar from the array + localStorage
function deleteSlotcar(e) {
    const id = parseInt(e.target.dataset.id);

    // Keep all cars except the one with this id
    allSlotcars = allSlotcars.filter(item => item.id !== id);

    // Save updated list
    updateLS(allSlotcars);

    // Re-apply filters and update stats
    applyFiltersAndSort();
    update_stats();
}

// =========================
// UPDATE STATISTICS
// =========================
// Updates collection size, total value and average price
const update_stats = (list = allSlotcars) => {

    // Total amount of cars
    document.querySelector('.collection-size').textContent =
        `Collectie grootte: ${list.length}`;

    let collectionValue = 0;

    // Calculate total value
    list.forEach(car => {
        collectionValue += Number(car.price);
    });

    document.querySelector('.collection-value').textContent =
        `Collectie waarde: €${collectionValue.toFixed(2)}`;

    const avgEl = document.querySelector('.average-price');

    // If no cars → avoid division by 0
    if (list.length === 0) {
        avgEl.textContent = `Gemiddelde prijs: €0.00`;
        return;
    }

    // Calculate average price
    const avg = collectionValue / list.length;

    avgEl.textContent = `Gemiddelde prijs: €${avg.toFixed(2)}`;
};

// =========================
// FILTER + SORT LOGIC
// =========================
function applyFiltersAndSort() {

    const formFilter = document.querySelector(".filter");
    const formSort = document.querySelector(".sort");

    // Read form values
    const filterData = new FormData(formFilter);
    const sortData = new FormData(formSort);

    const searchValue = document.querySelector("#search").value.toLowerCase();

    // Start with full list
    let result = [...allSlotcars];

    // Get selected filters (arrays)
    const makers = filterData.getAll("maker-filter");
    const classes = filterData.getAll("class-filter");
    const brands = filterData.getAll("brand-filter");
    const scales = filterData.getAll("scale-filter");

    // =========================
    // FILTERING
    // =========================
    result = result.filter(car => {

        // If no filter selected → allow all
        const makerMatch =
            makers.length === 0 || makers.includes(car.maker);

        const classMatch =
            classes.length === 0 || classes.includes(car.carClass);

        const brandMatch =
            brands.length === 0 || brands.includes(car.brand.toLowerCase());

        const scaleMatch =
            scales.length === 0 || scales.includes(car.scale);

        const searchMatch =
            car.maker.toLowerCase().includes(searchValue);

        // Only keep cars that match ALL conditions
        return makerMatch && classMatch && brandMatch && scaleMatch && searchMatch;
    });

    // =========================
    // SORTING
    // =========================
    const sortValue = sortData.get("sort");

    if (sortValue === "price-asc") {
        result.sort((a, b) => a.price - b.price);
    } else if (sortValue === "price-desc") {
        result.sort((a, b) => b.price - a.price);
    }

    // Update UI
    showSlotcars(result);
    update_stats(result);
}

// =========================
// INITIAL LOAD
// =========================
applyFiltersAndSort();
update_stats();

// =========================
// EVENT LISTENERS
// =========================
// Re-run filtering when user interacts
document.querySelector(".filter").addEventListener("change", applyFiltersAndSort);
document.querySelector(".sort").addEventListener("change", applyFiltersAndSort);
document.querySelector("#search").addEventListener("input", applyFiltersAndSort);