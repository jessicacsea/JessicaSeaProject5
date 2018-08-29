import axios from 'axios';

const apiUrl = 'https://images-api.nasa.gov/search';
// const apiKey = 'uby0yFLWRg1VB2J5FPLIAgnrRANdnBN7F6sF6aZf';

export function apiCall (searchText) {
  axios.get(apiUrl, {
    params: {
      keywords: 'something here to link back to searchText',
      year_start: 2016,
      media_types: image,
    }
  })
    .then((res) => {
      res = res.data.collection.items;
      console.log(res);
    });
}


// use query params to have an open keyword, use the searchText and input it into the keyword of the param
