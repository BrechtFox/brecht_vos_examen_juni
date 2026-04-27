// Saves the updated slotcar list to localStorage
// First removes the old version, then stores the new one as a JSON string
export const updateLS = (list) => {
    localStorage.removeItem('savedSlotcars');
    localStorage.setItem('savedSlotcars', JSON.stringify(list));
};