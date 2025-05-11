import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://api01.f8team.dev/api",
  prepareHeaders: (headers) => {
    headers.set("Authorzation", `Bearer ${localStorage.getItem}`);
    return headers;
  },
});
export default baseQuery;
