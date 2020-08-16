import client from "./client";

const getTips = () => client.get("/traveltip");

const getCountries = () => client.get("/countries");

// export const addTip = () => {
//   const data = new FormData();
//   data.append("title", "title");
//   data.append("description", "description");
//   data.append("category", "category");
//   data.append("country", "country");

//   console.log("data", data);

//   return client.post("/traveltip", data);
// };
//image

export default {
  getTips,
  getCountries,
  // addTip,
};
