import { updateLS } from "./utils.js";

let allSlotcars = JSON.parse(localStorage.getItem('savedSlotcars')) || [];

function showSlotcars() {
    const list = document.querySelector(".items");
    if (allSlotcars.length === 0) {
        list.innerHTML = '<p>Nog geen slotcars toegevoegd</p>';
        return
    }
    list.innerHTML = allSlotcars.map(slot => `
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
            </article>`
    ).join('')
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", deleteSlotcar);
    });
}

function deleteSlotcar(e) {
    const id = parseInt(e.target.dataset.id);
    
    allSlotcars = allSlotcars.filter(item => item.id !== Number(id))

    // update localStorage
    updateLS(allSlotcars);

    // re-render
    showSlotcars();
}

showSlotcars()