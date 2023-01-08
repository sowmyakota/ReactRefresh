import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID XPZhdylZDd2U5XMUgKgSCEsE9jVrCu7bD7u4A1Pcu54",
    },
    params: {
      query: term,
    },
  });

  return response;
};

export default searchImages;
