// =========================
// UPDATE LOCAL STORAGE
// =========================
// Saves the slotcar list to localStorage
// Converts the array to a JSON string before saving
export const updateLS = (list) => {

    // Remove old data (optional, but clean)
    localStorage.removeItem('savedSlotcars');

    // Save new data
    localStorage.setItem('savedSlotcars', JSON.stringify(list));
};