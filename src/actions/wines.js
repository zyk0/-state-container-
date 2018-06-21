import axios from 'axios';

export const setWines = wines => ({
  type: 'SET_WINES',
  payload: wines
});

export const fetchWines = () => dispatch =>
  axios('/wines.json').then(({ data }) => {
    dispatch(setWines(data));
});