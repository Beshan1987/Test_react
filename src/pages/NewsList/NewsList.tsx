import { useGetNewsListQuery } from "~/store/api/news/news.api";
import styles from "./NewsList.module.scss";
import { Link } from "react-router-dom";
import { Loader } from "~/shared/ui/Loader/Loader";
import { useState } from "react";
import { Button } from "~/shared/ui/Button/Button";

export const NewsList = () => {
  const { data: newsList, isLoading } = useGetNewsListQuery();
  const [sorted, setSorted] = useState(false);

  const toggleSort = () => {
    setSorted((sort) => !sort);
  };

  const sortedNews = newsList
    ? newsList
        .slice(0, 20)
        .map((newItem) => {
          return { ...newItem, date: new Date(newItem.id) };
        })
        .sort((a, b) => b.id - a.id)
    : null;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.wrapper}>
          <Button
            onClick={() => toggleSort()}
            className={sorted ? styles.clicked : styles.unClicked}
          >
            {sorted ? "Unsorted" : "Sorted"}
          </Button>
          {!sorted && newsList
            ? newsList.slice(0, 20).map((newsItem) => (
                <Link
                  className={styles.container}
                  to={`${newsItem.id}`}
                  key={newsItem.id}
                >
                  <div className={styles.inner}>
                    <img src={newsItem.url} alt="" />
                    <p>{newsItem.title}</p>
                    <p>{newsItem.id}</p>
                  </div>
                </Link>
              ))
            : sortedNews &&
              sortedNews.map((newsItem) => (
                <Link
                  className={styles.container}
                  to={`${newsItem.id}`}
                  key={newsItem.id}
                >
                  <div className={styles.inner}>
                    <img src={newsItem.url} alt="" />
                    <p>{newsItem.title}</p>
                    <p>{newsItem.id}</p>
                  </div>
                </Link>
              ))}
        </div>
      )}
    </>
  );
};
