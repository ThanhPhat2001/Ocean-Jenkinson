import {
  FaMapMarker,
  FaPhoneAlt,
  FaRegClock,
  FaSearch,
  FaUserAlt,
  FaShoppingCart,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../../public/images/logo.png";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className={styles.top_header}>
        <div className={styles.left_top_header}>
          <a className={styles.icon} href="#">
            <FaMapMarker />
          </a>
          <p>300 Ocean Avenue, Point Pleasant Beach, NJ 08742</p>
        </div>

        <div className={styles.right_top_header}>
          <div className={styles.phone}>
            <a className={styles.icon} href="#">
              <FaPhoneAlt />
            </a>
            <p>800.567.1234</p>
          </div>
          <div className={`${styles.open_daily} d-flex`}>
            <a className={styles.icon} href="#">
              <FaRegClock />
            </a>
            <p>Today's Hours: 9:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>

      <div className={`${styles.bottom_footer}  d-flex container`}>
        <div className={styles.left_bottom_header}>
          <a href="#">
            <img className={styles.logo} src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="right_bottom_header d-flex">
          <div className={styles.navigation}>
            <ul className="d-flex">
              <Link to="/">
                <a href="#">HOME</a>
              </Link>
              <Link to="/Ticket">
                <a href="#">TICKET</a>
              </Link>
              <Link to="/Event">
                <a href="#">EDUCATION</a>
              </Link>
              <Link to="/Blog">
                <a href="#">BLOG</a>
              </Link>
              <Link to="/About">
                <a href="#">ABOUT</a>
              </Link>
              <Link to="/Contact">
                <a href="#">CONTACT</a>
              </Link>
            </ul>
          </div>
        </div>
        <div className={styles.login}>
          <div className={styles.account}>
            <Link to="/Login">LOGIN</Link>
          </div>
          <div className={styles.icon_login}>
            <ul className="d-flex">
              <li><a href="#"><FaSearch /></a></li>
              <li><a href="#"><FaUserAlt /></a></li>
              <li><a href="#"><FaShoppingCart /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
