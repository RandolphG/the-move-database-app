import store from "../store";
const dispatch = store.dispatch;

/**
 * movie data
 */
export function fetchMovie() {
  const FETCH_RESULTS = `FETCH_RESULTS`;
  const baseUrl = `https://api.themoviedb.org/3/discover/movie`;
  const sort = `popularity.desc`;
  const language = `en-US`;
  const adult = true;
  const video = false;
  const api = `0bb2c886e26651f3b9d5a1a810a0bea6`;
  const url = `${baseUrl}?api_key=${api}&language=${language}&sort_by=${sort}&include_adult=${adult}&include_video=${video}&page=1`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return dispatch({ type: FETCH_RESULTS, payload: data.results });
    });

  // fetch(url)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     return dispatch({ type: FETCH_DATA, payload: data });
  //   });
}

/**
 *
 * @param movieID
 */
export function fetchDetails(movieID) {
  const FETCH_DETAILS = `FETCH_DETAILS`;
  const baseUrl = `https://api.themoviedb.org/3/movie/`;
  const language = `en-US`;
  const api = `0bb2c886e26651f3b9d5a1a810a0bea6`;
  const url = `${baseUrl}${movieID}?api_key=${api}&language=${language}`;
  console.log(`the url : ${url}`);

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return dispatch({ type: FETCH_DETAILS, payload: data });
    });
}
