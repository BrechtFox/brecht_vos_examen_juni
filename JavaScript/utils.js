export const updateLS = (list) => {
    localStorage.removeItem('savedSlotcars');
    localStorage.setItem('savedSlotcars', JSON.stringify(list));
};