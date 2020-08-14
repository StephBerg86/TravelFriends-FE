import client from "./client";

const getTips = () => client.get("/traveltip");

export default {
  getTips,
};
