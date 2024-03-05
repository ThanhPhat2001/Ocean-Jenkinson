import styles from "./Contact.module.css";
import Logo from "../../../public/images/logo.png";
import MapAndDate from "../../components/MapAndDate";
import {
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaPhoneAlt,
  FaFax,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className={`${styles.contact} mt-3 `}>
      <div className={`${styles.information} container`}>
        <div className="row">
          <form
            className={`${styles.information_guest} col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6`}
          >
            <div className={`${styles.guest_input} row`}>
              <h2>CONTACT INFO</h2>
              <div className={styles.contact_guest}>
                <div
                  className={`${styles.contact_guest_name} form-group required col-12`}
                >
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="form-control form-control-lg"
                    required
                  />
                </div>
                <div className={`${styles.contact_guest_email} col-12`}>
                  <input
                    type="text"
                    placeholder="Email*"
                    className="form-control form-control-lg"
                    required
                  />
                </div>
              </div>
              <div className={styles.contact_guest_content}>
                <textarea
                  className="col-12 form-control form-control-lg"
                  placeholder="Content"
                  rows={4} // Số dòng mặc định của textarea
                />
              </div>
            </div>
            <div className={styles.submit}>
              <button type="submit" className="btn btn-md ">
                SUBMIT
              </button>
            </div>
          </form>
          <div
            className={`${styles.information_adim} col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6`}
          >
            <ul>
              <li>
                <div className={styles.logo}>
                  <img src={Logo} alt={Logo} />
                </div>
              </li>
              <li>
                <div className={`${styles.address} d-flex`}>
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  <p className="mx-2 my-2">
                    300 Ocean Avenue, Point Pleasant Beach, NJ 08742
                  </p>
                </div>
              </li>
              <li>
                <div className={`${styles.email} d-flex`}>
                  <span>
                    <FaRegEnvelope />
                  </span>
                  <a className="mx-2 my-2" href="javascript:void(0)">
                    info@sky.com
                  </a>
                </div>
              </li>
              <li>
                <div className={`${styles.phone} d-flex`}>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <p className="mx-2 my-2">800.567.1234</p>
                </div>
              </li>
              <li>
                <div className={`${styles.fax} d-flex`}>
                  <span>
                    <FaFax />
                  </span>
                  <p className="mx-2 my-2">(013) 456789</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="map">
        <MapAndDate />
      </div>
    </div>
  );
};

export default Contact;
