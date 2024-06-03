import { useGetNewsListQuery } from "~/store/api/news/news.api";
import styles from "./NewsListPage.module.scss";
import { Loader } from "~/shared/ui/Loader/Loader";
import { ChangeEvent, useEffect, useState } from "react";
import { NewsList } from "~/features/NewsList/NewsList";
import debounce from "lodash/debounce";
import { Socket, io } from "socket.io-client";
import { News } from "~/entities/apiTypes";
import { API_URL } from "~/store/api/constants";

export const NewsListPage = () => {
  const { data: newsList, isLoading, error } = useGetNewsListQuery();

  const [filteredData, setFilteredData] = useState(newsList);
  const [filterDate, setFilterDate] = useState("");
  const [socketNews, setSocketNews] = useState<News[] | null>(null); // tested version
  const [socket, setSocket] = useState<Socket | null>(null); // tested version

  useEffect(() => {
    if (!socket) {
      const newSocket = io(API_URL);
      setSocket(newSocket);

      newSocket.on("news", (data: News[]) => {
        setSocketNews(data);
      });

      return () => {
        newSocket.disconnect();
      };
    }
  }, [socket]);

  useEffect(() => {
    const debouncedFilterData = debounce(() => {
      filterDate && socketNews
        ? setFilteredData(
            socketNews.filter((item) => item.title === filterDate) // need to change to date
          )
        : filterDate && newsList
        ? setFilteredData(newsList.filter((item) => item.title === filterDate))
        : setFilteredData(newsList);
    }, 500);

    debouncedFilterData();
  }, [newsList, socketNews, filterDate]);

  const handleFilterDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterDate(event.target.value);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.wrapper}>
          <div>{socketNews && socketNews[0].id}</div>
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
          ) : socketNews ? (
            <NewsList newsList={socketNews} sliceAmount={20} /> // // tested version of sockets, need to diving deeper
          ) : (
            <NewsList newsList={newsList} sliceAmount={20} />
          )}
          {error && "status" in error && (
            <div className={styles.error}>{error.status}</div>
          )}
        </div>
      )}
    </>
  );
};
