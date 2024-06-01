import { useGetNewsListQuery } from "~/store/api/bonus/bonus.api";

export const NewsList = () => {
  const { data } = useGetNewsListQuery();
  console.log(data);
  return <div></div>;
};
