import { updateLS } from "./utils.js";

// Load saved slotcars from localStorage or start with an empty array
let allSlotcars = JSON.parse(localStorage.getItem('savedSlotcars')) || [];

// Renders all slotcars into the HTML list
function showSlotcars(list = allSlotcars) {
    const container = document.querySelector(".items");

    if (list.length === 0) {
        container.innerHTML = '<p>Nog geen slotcars gevonden</p>';
        return;
    }

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
            <button class="delete-btn" data-id="${slot.id}">❌</button>
        </article>
    `).join('');

    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", deleteSlotcar);
    });
}

// Deletes a slotcar from the list
function deleteSlotcar(e) {
    const id = parseInt(e.target.dataset.id);

    // Remove item with matching ID
    allSlotcars = allSlotcars.filter(item => item.id !== Number(id));

    // Save updated list and refresh UI
    updateLS(allSlotcars);
    applyFiltersAndSort();
    update_stats();
}

// Updates stats like total size, total value, and average price
const update_stats = () => {
    document.querySelector('.collection-size').textContent =
        `Collectie grootte: ${allSlotcars.length}`;

    let collectionValue = 0;

    // Sum up all prices
    allSlotcars.forEach(car => {
        collectionValue += Number(car.price);
    });

    document.querySelector('.collection-value').textContent =
        `Collectie waarde: €${collectionValue.toFixed(2)}`;

    const avgEl = document.querySelector('.average-price');

    // If empty collection, avoid division by zero
    if (allSlotcars.length === 0) {
        avgEl.textContent = `Gemiddelde prijs: €0.00`;
        return;
    }

    // Calculate average price
    const avg = collectionValue / allSlotcars.length;
    avgEl.textContent = `Gemiddelde prijs: €${avg.toFixed(2)}`;
};

function applyFiltersAndSort() {
    const formFilter = document.querySelector(".filter");
    const formSort = document.querySelector(".sort");

    const filterData = new FormData(formFilter);
    const sortData = new FormData(formSort);

    let result = [...allSlotcars];

    // Get filter groups
    const makers = filterData.getAll("maker-filter");
    const classes = filterData.getAll("class-filter");
    const brands = filterData.getAll("brand-filter");
    const scales = filterData.getAll("scale-filter");

    // FILTERING
    result = result.filter(car => {
        const makerMatch =
            makers.length === 0 || makers.includes(car.maker);

        const classMatch =
            classes.length === 0 || classes.includes(car.carClass);

        const brandMatch =
            brands.length === 0 || brands.includes(car.brand.toLowerCase());

        const scaleMatch =
            scales.length === 0 || scales.includes(car.scale);

        return makerMatch && classMatch && brandMatch && scaleMatch;
    });

    // SORTING
    const sortValue = sortData.get("sort");

    if (sortValue === "price-asc") {
        result.sort((a, b) => a.price - b.price);
    } else if (sortValue === "price-desc") {
        result.sort((a, b) => b.price - a.price);
    }

    // Render result
    showSlotcars(result);

    // Optional: update stats based on filtered view
    update_stats(result);
}

// Initial render
applyFiltersAndSort();
update_stats();

// Listen for filter + sort changes
document.querySelector(".filter").addEventListener("change", applyFiltersAndSort);
document.querySelector(".sort").addEventListener("change", applyFiltersAndSort);