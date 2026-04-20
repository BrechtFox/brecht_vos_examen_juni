import { updateLS } from "./utils.js";

let allSlotcars = JSON.parse(localStorage.getItem('savedSlotcars')) || [];

document.querySelector('form.add').addEventListener('submit', (e) => {
    e.preventDefault();
    add()
});

function add() {
    const newSlotcar = {
        
    }
}