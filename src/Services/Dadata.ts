import axios from 'axios';
import { DADAT_API_KEY } from 'Constants';

export default function Dadata(query: string) {
  axios
    .post(
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', // url
      { query: query },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Token ' + DADAT_API_KEY,
        },
        // `withCredentials` indicates whether or not cross-site Access-Control requests
        // should be made using credentials
        withCredentials: true,
      }, // config
    )
    .then(function (response) {
      console.log(response); // Здесь обработать ответ как надо
    })
    .catch(function (error) {
      console.log(error);
    });
}
