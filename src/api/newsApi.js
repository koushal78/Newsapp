import axios from 'axios';

const BASE_URL = `https://newsdata.io/api/1/latest`


export const getData = async()=>{
    
try {
        const response  = await axios.get(BASE_URL,{
            params:{
                apikey: import.meta.env.VITE_NEWS_API_KEY,
                q:'pizza',
               
            }
        });
        console.log('Total results:', response.data.totalResults);
        console.log(Math.ceil(response.data.totalResults / 10));
        return {
      articles: response.data.results,
      total: response.data.totalResults,
    };
} catch (error) {
    console.error("Error fetching News Data",error)
    throw error;
    
}
}