import axios from "axios";

const API_KEY = "7e19d1d82d784f0e96c716f7cd5b0333";

axios.defaults.baseURL = "https://newsapi.org/v2/";

export const getNews = async (category) => {
   try {
       const response = await axios.get(
           `top-headlines?country=us&category=${category}&apikey=${API_KEY}`
        );
        console.log(response.data)
        return response.data;

   } catch (error) {
       throw new Error(error);
   }
}

