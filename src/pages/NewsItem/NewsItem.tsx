import { useNavigate, useParams } from "react-router-dom";
import { Button } from "~/shared/ui/Button/Button";
import { useGetNewsQuery } from "~/store/api/news/news.api";

import styles from "./NewsItem.module.scss";
import { Loader } from "~/shared/ui/Loader/Loader";

export const NewsItem = () => {
  const { id } = useParams<{ id: string }>();

  const { data: newsItem, isLoading } = useGetNewsQuery(Number(id));
  const navigate = useNavigate();

  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className={styles.container}>
          <Button onClick={() => navigate(-1)} appearance="secondary">
            Back
          </Button>
          <div className={styles.inner}>
            <h1>{newsItem?.title}</h1>
            <img src={newsItem?.thumbnailUrl}></img>
          </div>
        </div>
      )}
    </>
  );
};
