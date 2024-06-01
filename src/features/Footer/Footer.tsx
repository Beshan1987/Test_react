import { ReactComponent as Instagram } from "~/assets/icons/instagram.svg";
import { ReactComponent as TikTok } from "~/assets/icons/tiktok.svg";
import { ReactComponent as YouTube } from "~/assets/icons/youtube.svg";
import { ReactComponent as FooterLogo } from "~/assets/logoFooter.svg";

import { menuLinks } from "./Footer.constants";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.copyright}>
            <p>Webdesign: BeshanPro</p>
            <p>Copyright © BeshanCo 2024 | All Rights Reserved.</p>
          </div>
        </div>
        <div className={styles.menu}>
          {menuLinks.map((link) => (
            <a key={link.path} href={link.path}>
              {link.title}
            </a>
          ))}
        </div>
        <div className={styles.social}>
          <p>Socials</p>
          <div className={styles.links}>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <YouTube />
            </a>
            <a href="#">
              <TikTok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
