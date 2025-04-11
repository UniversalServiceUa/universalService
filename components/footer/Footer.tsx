import React from "react";
import cl from "./footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTelegram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="footer" className={cl.footer}>
      <div className={cl.footerContainer}>
        <div className={cl.footerInfo}>
          <div className={cl.item}>
            <div>
              <FontAwesomeIcon
                icon={faMobileScreen}
                className="fa-solid fa-mobile-screen"
              />
            </div>
            <Link href="tel:+380969729277">+380969729277</Link>
          </div>
          <div className={cl.item}>
            <div>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="fa-solid fa-envelope"
              />
            </div>
            <div>universalservice.ua@gmail.com</div>
          </div>
        </div>

        <div className={cl.footerSocial}>
          <Link
            href="https://www.instagram.com/universal_service.ua?igsh=b3k2d3NzMDI2bmJm"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="fa-brands fa-instagram"
            />{" "}
            Instagram
          </Link>
          <Link
            href="https://www.tiktok.com/@universal_service.ua?_t=ZM-8uok1iCW1lV&_r=1"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTiktok} className="fa-brands fa-tiktok" />{" "}
            TikTok
          </Link>
          <Link href="t.me/universalservice_ua" target="_blank">
            <FontAwesomeIcon
              icon={faTelegram}
              className="fa-brands fa-telegram"
            />{" "}
            Telegram
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
