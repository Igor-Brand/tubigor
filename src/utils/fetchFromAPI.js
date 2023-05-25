import axios from 'axios';
const BASE_URL= 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
        maxResults:'50'
    },
    headers: {
      'X-RapidAPI-Key': 'ba50f539f0msha28ace12a344aabp12ede3jsn37dd573ebb3f',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const fetchFromAPI = async (url)=>{
    const {data} = await axios.get(`
    ${BASE_URL}/${url}`,options);

    return data;
  }
  