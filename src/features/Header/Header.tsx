import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as News } from "~/assets/icons/icons8-новости.svg";
import { ReactComponent as SettingsIcon } from "~/assets/icons/settings.svg";
import { ReactComponent as HeaderLogo } from "~/assets/icons/icons8-home.svg";

import styles from "./Header.module.scss";
import { Button } from "../../shared/ui/Button/Button";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className={styles.container}>
        <Link to={"/"}>
          <HeaderLogo />
        </Link>
        <div className={styles.btn_container}>
          <div className={styles.buttons}>
            <Button
              icon={<News />}
              appearance="secondary2"
              onClick={() => navigate("/news")}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
