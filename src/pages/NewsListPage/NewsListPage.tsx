import { useGetNewsListQuery } from "~/store/api/news/news.api";
import styles from "./NewsListPage.module.scss";
import { Loader } from "~/shared/ui/Loader/Loader";
import { ChangeEvent, useEffect, useState } from "react";
import { NewsList } from "~/features/NewsList/NewsList";
import debounce from "lodash/debounce";

export const NewsListPage = () => {
  const { data: newsList, isLoading, error } = useGetNewsListQuery();

  const [filteredData, setFilteredData] = useState(newsList);
  const [filterDate, setFilterDate] = useState("");

  useEffect(() => {
    const debouncedFilterData = debounce(() => {
      filterDate && newsList
        ? setFilteredData(newsList.filter((item) => item.title === filterDate))
        : setFilteredData(newsList);
    }, 500);

    debouncedFilterData();
  }, [newsList, filterDate]);

  const handleFilterDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterDate(event.target.value);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.search}>
            <label>
              Filter by date:
              <input
                type="date"
                value={filterDate}
                onChange={handleFilterDateChange}
              />
            </label>
          </div>
          {filterDate ? (
            <NewsList newsList={filteredData} sliceAmount={20} /> // sliceAmount is an option, temporary
          ) : (
            <NewsList newsList={newsList} sliceAmount={20} /> // sliceAmount is an option, temporary
          )}
          {error && "status" in error && (
            <div className={styles.error}>{error.status}</div>
          )}
        </div>
      )}
    </>
  );
};
