import { Outlet } from "react-router-dom";

import { Header } from "~/features/Header/Header";

import styles from "./MainLayout.module.scss";
import { Footer } from "../../features/Footer/Footer";

export const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <div className={styles.inner}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};
