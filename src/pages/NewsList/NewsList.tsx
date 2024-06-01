import { useGetNewsListQuery } from "~/store/api/bonus/bonus.api";
import styles from "./NewsList.module.scss";
import { Link } from "react-router-dom";

export const NewsList = () => {
  const { data: newsList } = useGetNewsListQuery();

  return (
    <div className={styles.wrapper}>
      {newsList &&
        newsList.slice(0, 20).map((newsItem) => (
          <Link className={styles.container} to={`${newsItem.id}`}>
            <div className={styles.inner}>
              <img src={newsItem.url} alt="" />
              <p>{newsItem.title}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};
