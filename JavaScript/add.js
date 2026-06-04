import { updateLS } from "./utils.js";

// Load existing slotcars
let allSlotcars = JSON.parse(localStorage.getItem('savedSlotcars')) || [];

// Listen for form submit
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    add();
});

// =========================
// SHOW MESSAGE
// =========================
// Displays success/error feedback
function showMessage(type, message) {
    document.querySelector('#message').innerHTML =
        `<p class="${type}">${message}</p>`;
}

// =========================
// ADD NEW SLOT CAR
// =========================
function add() {

    // Generate unique ID
    let newId = allSlotcars.length > 0
        ? Math.max(...allSlotcars.map(item => item.id)) + 1
        : 1;

    // Create object from form inputs
    const newSlotcar = {
        maker: document.querySelector('#maker').value,
        carClass: document.querySelector('#car-class').value,
        brand: document.querySelector('#brand').value,
        scale: document.querySelector('#scale').value,
        color: document.querySelector('#color').value,
        price: document.querySelector('#price').value,
        state: document.querySelector('#state').value,
        id: newId
    };

    // =========================
    // VALIDATION
    // =========================
    // Check if all fields are filled
    if (newSlotcar.maker && newSlotcar.carClass && newSlotcar.brand &&
        newSlotcar.scale && newSlotcar.color &&
        newSlotcar.price && newSlotcar.state) {

        // Validate maker
        if (["BRM", "ScaleAuto", "Gecko"].includes(newSlotcar.maker)) {

            // Validate class
            if (["minicar", "youngtimer", "GT-pro"].includes(newSlotcar.carClass)) {

                // Validate brand
                if (["mini", "viper", "porsche"].includes(newSlotcar.brand)) {

                    // Validate scale
                    if (["1:24", "1:32"].includes(newSlotcar.scale)) {

                        // Add to list
                        allSlotcars.push(newSlotcar);

                        // Save to localStorage
                        updateLS(allSlotcars);

                        showMessage("success", "Nieuwe slotcar toegevoegd.");

                        // Reset form
                        document.querySelector("form").reset();

                    } else {
                        showMessage("error", "Schaal bestaat niet, nieuwe slotcar niet toegevoegd.");
                    }

                } else {
                    showMessage("error", "Merk niet gevonden, nieuwe slotcar niet toegevoegd.");
                }

            } else {
                showMessage("error", "Klasse niet gevonden, nieuwe slotcar niet toegevoegd.");
            }

        } else {
            showMessage("error", "Maker niet gevonden, nieuwe slotcar niet toegevoegd.");
        }

    } else {
        showMessage("error", "Niet alle velden ingevuld, nieuwe slotcar niet toegevoegd.");
    }
}