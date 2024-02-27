import styles from './ticket.module.css'
import { Link } from "react-router-dom";

const Ticket = () => {
  return (
    <div>
      <div className="history_main  container">
        <div className="row">
          <div className="history_text col-8 ">
            <div className={styles.history_title}>
              <h1>
                <span>Welcome to</span>
                <br />
                Jenkinson’s Aquarium
              </h1>
            </div>
            <div className={styles.history_content}>
              <p>
                Jenkinson’s Aquarium is a privately owned facility located on
                the boardwalk in Point Pleasant Beach, NJ. Since June of 1991,
                the aquarium has been dedicated to educating the public on all
                aspects of marine life and conservation. Each exhibit is
                designed to promote awareness of the animals, their habitats and
                conservation. We strive to provide our guests with a unique and
                memorable experience through creative exhibits as well as
                innovative educational and outreach programs...
              </p>
            </div>
          </div>
          <div className={`${styles.history_more} col-4`}>
            <Link to="/History">
              <a href="#">FIND OUT MORE !</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Ticket