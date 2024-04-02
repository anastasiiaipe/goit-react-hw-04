import axios from "axios";

const API_KEY = "N1wkBSvQFEDTZ_7h-kQL4Kc83TbqC271jnUSBgM_cNw";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  per_page: 15,
  orientation: "landscape",
};

export const fetchImages = async (query, page) => {
  const data = await axios.get(`search/photos?page=${page}&query=${query}`);
  return data;
};
