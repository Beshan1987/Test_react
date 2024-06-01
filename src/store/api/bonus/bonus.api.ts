import { baseApi } from "..";
import { News } from "../../../entities/apiTypes";

export const bonusApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getNews: build.query<News, number>({
      query: (id) => ({
        url: `photos/${id}`,
      }),
      providesTags: [{ type: "NEWS", id: "LIST" }],
    }),
    getNewsList: build.query<News[], void>({
      query: () => ({
        url: `photos`,
      }),
      providesTags: (result) =>
        result
          ? [
              ...Object.keys(result).map((id) => ({
                type: "NEWS" as const,
                id,
              })),
              { type: "NEWS", id: "LIST" },
            ]
          : [{ type: "NEWS", id: "ENTITY" }],
    }),
  }),
});

export const { useGetNewsQuery, useGetNewsListQuery } = bonusApi;
