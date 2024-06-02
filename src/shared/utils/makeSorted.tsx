import { News } from "~/entities/apiTypes";

export const makeSorted = ({
  newsList,
  sliceAmount,
}: {
  newsList: News[];
  sliceAmount: number;
}) => {
  const sortedNews = newsList
    .slice(0, sliceAmount)
    .map((newItem) => {
      return { ...newItem, date: new Date(newItem.id) };
    })
    .sort((a, b) => b.id - a.id);

  return sortedNews;
};
