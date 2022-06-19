import axios from 'axios'

export const baseUrl = 'bayut.p.rapidapi.com'

  export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host':'//bayut.p.rapidapi.com',
            'x-rapidapi-key':'1fe20b24fcmsh1799f6e55c3fba3p17a16bjsnee7e3397bc65',  
          }
    })    
    return data;
  }

   