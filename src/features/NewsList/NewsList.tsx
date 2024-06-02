import { Link } from "react-router-dom";
import { News } from "~/entities/apiTypes";

import styles from "./NewsList.module.scss";

export const NewsList = ({
  newsList,
  newsItem,
  sliceAmount,
}: {
  newsList?: News[];
  newsItem?: News;
  sliceAmount?: number;
}) => {
  return (
    <>
      {newsList
        ? newsList.slice(0, sliceAmount).map((newsItem) => (
            <Link
              className={styles.container}
              to={`${newsItem.id}`}
              key={newsItem.id}
            >
              <div className={styles.inner}>
                <img src={newsItem.url} alt="" />
                <p>{newsItem.title}</p>
              </div>
            </Link>
          ))
        : newsItem && (
            <div className={styles.innerNewsItem}>
              <h1>{newsItem.title}</h1>
              <img src={newsItem.url} alt="" />
            </div>
          )}
    </>
  );
};
