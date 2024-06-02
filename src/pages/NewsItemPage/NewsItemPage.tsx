import { useNavigate, useParams } from "react-router-dom";
import { Button } from "~/shared/ui/Button/Button";
import { useGetNewsQuery } from "~/store/api/news/news.api";

import styles from "./NewsItemPage.module.scss";
import { Loader } from "~/shared/ui/Loader/Loader";
import { NewsList } from "~/features/NewsList/NewsList";

export const NewsItemPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: newsItem, isLoading, error } = useGetNewsQuery(Number(id));
  const navigate = useNavigate();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <Button onClick={() => navigate(-1)} appearance="secondary">
            Back
          </Button>
          <NewsList newsItem={newsItem} />
        </div>
      )}
      {error && "status" in error && (
        <div className={styles.error}>{error.status}</div>
      )}
    </>
  );
};
