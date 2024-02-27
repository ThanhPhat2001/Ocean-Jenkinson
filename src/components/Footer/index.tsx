import styles from "./footer.module.css";
import Logo from "../../../public/images/logo4.png";
import Pay from "../../../public/images/pay.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP, FaInstagram, FaMapMarkerAlt, FaRegEnvelope, FaPhoneAlt, FaFax
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={`${styles.footer} `}>
    <div className="container">
      <div className={`${styles.top_footer} row`}>
        <div className={`${styles.logo} col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3`}>
          <img src={Logo} alt={Logo} />
          <p className={styles.logo_content}>
            Gumbo beet greens corn soko endive gum gourd. Parsley allot
            courgette tatsoi pea sprouts fava bean soluta nobis est ses
            eligendi optio.
          </p>
          <ul className={styles.icon}>
            <li>
              <a href=""><FaFacebookF /></a>
            </li>
            <li>
              <a href=""><FaTwitter /></a>
            </li>
            <li>
              <a href=""><FaGooglePlusG /></a>
            </li>
            <li>
              <a href=""><FaPinterestP /></a>
            </li>
            <li>
              <a href=""><FaInstagram /></a>
            </li>
          </ul>
        </div>
        <div className={`${styles.support} col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3`}>
          <h6>SUPPORT</h6>
          <ul>
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Discount</a></li>
            <li><a href="#">Privacy & Policy</a></li>
            <li><a href="#">Packages</a></li>
          </ul>
        </div>
        <div className={`${styles.contact} col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3`}>
          <h6>CONTACT</h6>
          <ul>
            <li className="d-flex">
              <p><FaMapMarkerAlt /></p>
              <p className="mx-2">300 Ocean Avenue, Point Pleasant Beach, NJ 08742</p>
            </li>
            <li className="d-flex">
              <p><FaRegEnvelope /></p>
              <a className="mx-2" href="#">info@sky.com</a>
            </li>
            <li className="d-flex">
              <p><FaPhoneAlt /></p>
              <p className="mx-2">800.567.1234</p>
            </li>
            <li className="d-flex">
              <p><FaFax /></p>
              <p className="mx-2">(013) 456789</p>
            </li>
          </ul>
        </div>
        <div className={`${styles.pay} col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3`}>
          <h6>PAY SAFELY WITH US</h6>
          <ul>
            <li>
              <p>The payment is encrypted and transmitted securely with an SSL protocol.</p>
            </li>
            <li className="my-4">
              <img src={Pay} alt={Pay} />
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.bottom_footer} col-12`}>
        <p>Copyright © 2024 Travel Tour by GoodLayers. All Rights Reserved |
          <a className="mx-1" href="#">Privacy Policy</a> |
          <a className="mx-1" href="#">Terms and Conditions</a>
        </p>
      </div>
    </div>
  </div>
  );
};

export default Footer;
