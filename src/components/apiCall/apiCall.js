import axios from 'axios';

const apiUrl = 'https://images-api.nasa.gov/search';
// const apiKey = 'uby0yFLWRg1VB2J5FPLIAgnrRANdnBN7F6sF6aZf';

export default function apiCall (searchText) {
  return axios.get(apiUrl, {
    params: {
      keywords: searchText,
      year_start: 2016,
      media_type: 'image',
    }
  })
}

    // initially had this then method here after the API call, but we don't need to use it just yet. moved it to where it is being called aka on the input page after the user had filled and submitted their searchText
    // .then((res) => {
    //   res = res.data.collection.items;
    //   console.log(res);
    // });


// use query params to have an open keyword, use the searchText and input it into the keyword of the param - COMPLETED

// should i just put apiCall in the Inputpage? want to make sure my api call is correct too - COMPLETED

// want to be able to get 5 random pictures, how do i do that? (FOR LOOPS?) - COMPLETE



