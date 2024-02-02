import styles from "./home.module.css";
import { Link } from "react-router-dom";
import Event from "../../components/Event";
import Education from "../../components/Education";
import Ticket from "../../components/Ticket";
import Banner from "../../components/Banner";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  AOS.init();
  return (
    <section className="home mt-2">
      <section data-aos="zoom-in" className={styles.banner}>
        <div className={styles.video_banner}>
          <video
            className={styles.video}
            src="https://jenkinsons.com/aquarium/wp-content/uploads/sites/2/2018/04/Aquarium-Commercial-website.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </section>

      <section data-aos="zoom-in" className="history my-3">
        <div className="history_main d-flex container">
          <div className="history_text col-md-8 col-sm-12 ">
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
          <div className={`${styles.history_more} col-md-4 col-sm-12`}>
            <Link to="/History">
              <a href="#">Find Out More !</a>
            </Link>
          </div>
        </div>
      </section>
      <Event />
      <Ticket />
      <Education />
      <Banner />
    </section>
  );
};

export default Home;
