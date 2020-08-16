import client from "./client";

const getTips = () => client.get("/traveltip");

const getCountries = () => client.get("/countries");

export default {
  getTips,
  getCountries,
};
