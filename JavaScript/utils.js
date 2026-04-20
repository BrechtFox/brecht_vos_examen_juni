export const updateLS = (lijst) => {
    localStorage.removeItem('opgeslagenCitaten');
    localStorage.setItem('opgeslagenCitaten', JSON.stringify(lijst));
};