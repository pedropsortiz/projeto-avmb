import api from "../components/api/api.js";

export const fetchData = async () => {
    try {
      const response = await api.get("/produtos");
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };


  export const apiService = {
    fetchData,

  };