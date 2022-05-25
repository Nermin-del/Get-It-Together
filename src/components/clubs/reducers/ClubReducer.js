export const ClubReducer = (state = 0, action) => {
    switch (action.type) {
        case 'CLUB_COUNTER_ADD':
            return state + 1;
        case 'CLUB_COUNTER_SUBTRACT':
            return state - 1;
        case 'CLUB_COUNTER_SET':
            return action.counter;
        default:
            return state;
    }
}