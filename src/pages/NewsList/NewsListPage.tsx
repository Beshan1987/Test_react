import { useGetNewsListQuery } from "~/store/api/news/news.api";
import styles from "./NewsListPage.module.scss";
import { Loader } from "~/shared/ui/Loader/Loader";
import { useState } from "react";
import { Button } from "~/shared/ui/Button/Button";
import { NewsList } from "~/features/NewsList/NewsList";
import { makeSorted } from "~/shared/utils/makeSorted";

export const NewsListPage = () => {
  const { data: newsList, isLoading } = useGetNewsListQuery();
  const [sorted, setSorted] = useState(false);

  const toggleSort = () => {
    setSorted((sort) => !sort);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.wrapper}>
          <Button
            onClick={() => toggleSort()}
            appearance={sorted ? "primary" : "secondary"}
          >
            {sorted ? "Unsorted" : "Sorted"}
          </Button>
          {!sorted && newsList ? (
            <NewsList newsList={newsList} sliceAmount={20} />
          ) : (
            newsList && (
              <NewsList newsList={makeSorted({ newsList, sliceAmount: 20 })} />
            )
          )}
        </div>
      )}
    </>
  );
};
