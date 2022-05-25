export const clubCounterAdd = () => {
  return {
    type: 'CLUB_COUNTER_ADD'
  };
}

export const clubCounterSubtract = () => {
  return {
    type: 'CLUB_COUNTER_SUBTRACT'
  };
}

export const clubCounterSet = (counter) => {
  return {
    type: 'CLUB_COUNTER_SET',
    counter
  };
}