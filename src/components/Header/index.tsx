import {
  FaMapMarker,
  FaPhoneAlt,
  FaRegClock,
  FaUserAlt,
  FaShoppingCart,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../../public/images/logo.png";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.top_header}>
        <div className="container">
          <div className="row">
            <div
              className={`${styles.left_top_header} col-xs-7 col-sm-7 col-md-7 col-lg-6 col-xl-6`}
            >
              <a className={styles.icon} href="#">
                <FaMapMarker />
              </a>
              <p>300 Ocean Avenue, Point Pleasant Beach, NJ 08742</p>
            </div>

            <div
              className={`${styles.right_top_header}  col-xs-5 col-sm-5 col-md-5 col-lg-6 col-xl-6`}
            >
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
        </div>
      </div>

      <div className={styles.bottom_header}>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand className={styles.logo}> <img src={Logo} alt={Logo} /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav " />
            <Navbar.Collapse className={styles.navigation} id="basic-navbar-nav ">
              <Nav className={`${styles.title_navigation} me-auto`}>
                <Nav.Link> <Link to="/">
                  HOME
                </Link></Nav.Link>
                <Nav.Link><Link to="/Ticket">
                  TICKET
                </Link></Nav.Link>
                <Nav.Link><Link to="/Blog">
                  BLOG
                </Link></Nav.Link>
                <Nav.Link><Link to="/Contact">
                  CONTACT
                </Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className={styles.user_action}>
              <ul>
                <li><Link to="/Login">
                  <div className={styles.login}>
                    <p><FaUserAlt /></p>
                    <span>LOGIN</span>
                  </div>
                </Link></li>
                <li><Link to="/Cart">
                  <div className={styles.cart}>
                    <p><FaShoppingCart /></p>
                    <span>0</span>
                  </div>
                </Link></li>
              </ul>
            </div>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
