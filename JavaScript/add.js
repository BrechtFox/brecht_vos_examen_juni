import { updateLS } from "./utils.js";

let allSlotcars = JSON.parse(localStorage.getItem('savedSlotcars')) || [];

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    add()
});

function showMessage(type, message) {
    document.querySelector('#message').innerHTML = `<p class="${type}">${message}</p>`
}

function add() {
    // newId made by chatGPT
    let newId = allSlotcars.length > 0
    ? Math.max(...allSlotcars.map(item => item.id)) + 1
    : 1;
    const newSlotcar = {
        maker: document.querySelector('#maker').value,
        carClass: document.querySelector('#car-class').value,
        brand: document.querySelector('#brand').value,
        scale: document.querySelector('#scale').value,
        color: document.querySelector('#color').value,
        price: document.querySelector('#price').value,
        state: document.querySelector('#state').value,
        id: newId
    }
    if (newSlotcar.maker && newSlotcar.carClass && newSlotcar.brand && newSlotcar.scale && newSlotcar.color && newSlotcar.price && newSlotcar.state) {
        if (["BRM", "ScaleAuto", "Gecko"].includes(newSlotcar.maker)) {
            if (["minicar", "youngtimer", "GT pro"].includes(newSlotcar.carClass)) {
                if (["mini", "viper", "porsche"].includes(newSlotcar.brand)) {
                    if (["1:24", "1:32"].includes(newSlotcar.scale)) {
                        
                        allSlotcars.push(newSlotcar);
                        updateLS(allSlotcars);
                        showMessage("success", "Nieuwe slotcar toegevoegd.");
                    } else {
                        showMessage("error", "Schaal bestaat niet, nieuwe slotcar niet toegevoegd.");
                    };
                } else {
                    showMessage("error", "Merk niet gevonden, nieuwe slotcar niet toegevoegd.");
                };
            } else {
                showMessage("error", "Klasse niet gevonden, nieuwe slotcar niet toegevoegd.");
            };
        } else {
            showMessage("error", "Maker niet gevonden, nieuwe slotcar niet toegevoegd.");
        };
    } else {
        showMessage("error", "Niet alle velden ingevuld, nieuwe slotcar niet toegevoegd.");
    };
};