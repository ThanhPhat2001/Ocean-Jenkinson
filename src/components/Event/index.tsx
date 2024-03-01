import styles from "./event.module.css";
import Event_great_image from "../../../public/images/great-image-1.jpeg";
import Event_exhibits_image from "../../../public/images/exhibits-image-2.jpeg";
import Event_famaly_image from '../../../public/images/event_family_image.jpg'
import { FaFish } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Event = () => {
  AOS.init();
  return (
    <section className={styles.event}>
      <div className="main_event container">
        <div className="event_great row">
          <div className={`${styles.event_great_content} col-6 col-sm-6 col-md-6 col-lg-5 col-xl-5 `}>
            <h3>THE AQUARIUM ALWAYS HAS GREAT THINGS GOING ON !</h3>
            <p>
              <a href="#">VIEW MORE</a>
            </p>
          </div>
          <div className={`${styles.event_great_img} col-6 col-sm-6 col-md-6 col-lg-5 col-xl-5 `}>
            <img src={Event_great_image} alt={Event_great_image} />
          </div>
          <div className={`${styles.event_great_fish} col-6 col-sm-6 col-lg-2 col-xl-2 `}>
            <p>
              <FaFish />
            </p>
            <p>
              <FaFish />
            </p>
            <p>
              <FaFish />
            </p>
          </div>
        </div>
        <div className="event_exhibits row py-5">
          <div className={`${styles.event_exhibits_fish} col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 `}>
            <p>
              <FaFish />
            </p>
            <p>
              <FaFish />
            </p>
            <p>
              <FaFish />
            </p>
          </div>
          <div className={`${styles.event_exhibits_img} col-6 col-sm-6 col-md-6 col-lg-5 col-xl-5 `}>
            <img src={Event_exhibits_image} alt={Event_exhibits_image} />
          </div>
          <div className={`${styles.event_exhibits_content} col-6 col-sm-6 col-md-6 col-lg-5 col-xl-5 `}>
            <h3>OUR EXHIBITS</h3>
            <p>
              From large sharks, a rescued sea turtle and friendly stingrays to
              tiny, colorful fish and a Giant Pacific Octopus, the Children’s
              Aquarium is home to amazing aquatic animals from across the globe
              and around the state. Visitors can feed and pet our graceful
              stingrays and give a meal to our new Archer Fish that spit water
              to get their food.
            </p>
            <span>
              <a href="#">LEARN MORE</a>
            </span>
          </div>
        </div>
        <div className="event_family row ">
          <div className={`${styles.event_family_content} col-6 col-sm-6 col-md-6 col-lg-5 col-xl-5 `}>
            <h3>A PLACE TO ENJOY THE WEEKEND FOR EVERY FAMILY</h3>
            <span>
              <a href="#">LEARN MORE</a>
            </span>
          </div>
          <div className={`${styles.event_family_img} col-6 col-sm-6 col-md-6 col-lg-5 col-xl-5 `}>
            <img src={Event_famaly_image} alt={Event_famaly_image} />

          </div>
          <div className={`${styles.event_family_fish} col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 `}>
            <p>
              <FaFish />
            </p>
            <p>
              <FaFish />
            </p>
            <p>
              <FaFish />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Event;
