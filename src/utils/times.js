export const fetchAPI = (date) => {
    if (typeof window !== 'undefined' && typeof window.fetchAPI === 'function') {
        return window.fetchAPI(date);
    }
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(new Date(action.payload));
        default:
            return state;
    }
}

export function initializeTimes() {
    const today = new Date();
    return fetchAPI(today);
}
