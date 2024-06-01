import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIKEY, API_URL } from "./constants";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${APIKEY}`);
      headers.set("X-Api-Key", `${APIKEY}`);
      return headers;
    },
  }),
  tagTypes: ["NEWS"],
  endpoints: () => ({}),
});
