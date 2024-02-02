import styles from "./event.module.css";
import Event_great_image from "../../../public/images/great-image-1.jpeg";
import Event_exhibits_image from "../../../public/images/exhibits-image-2.jpeg";
import Event_Image_2 from '../../../public/images/event_image2.jpg'
import { FaFish } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Event = () => {
  AOS.init();
  return (
    <section className={styles.event}>
      <div className="main_event container">
        <div className={`${styles.event_great} d-flex`}>
          <div data-aos="fade-right"
            className={`${styles.great_content}  col-md-4`}
          >
            <h3>THE AQUARIUM ALWAYS HAS GREAT THINGS GOING ON !</h3>
            <p>
              <a href="#"> VIEW THE CALENDAR </a>
            </p>
          </div>
          <div data-aos="fade-left"
            className={`${styles.great_img}  col-md-4 `}
          >
            <img src={Event_great_image} alt={Event_great_image} />
          </div>
          <div data-aos="zoom-in" className={`${styles.great_fish} `}>
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
        <div className={`${styles.event_exhibits}  d-flex`}>
          <div data-aos="zoom-in" className={`${styles.event_exhibits_fish} col-md-4`}>
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
          <div data-aos="zoom-in-up"
            className={`${styles.event_exhibits_img}   col-md-4`}
          >
            <img src={Event_exhibits_image} alt={Event_exhibits_image} />
          </div>
          <div data-aos="zoom-in-down"
            className={`${styles.event_exhibits_content} ${styles.focus_in_contract_bck} col-md-4`}
          >
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
        <div className={`${styles.event_family} d-flex `}>
          <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className={`${styles.event_family_content}  col-md-4 `}>
            <h3>A PLACE TO ENJOY THE WEEKEND FOR EVERY FAMILY</h3>
            <span>
              <a href="#">LEARN MORE</a>
            </span>
          </div>
          <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className={`${styles.event_family_img}  col-md-4 `}>
            <img src={Event_Image_2} alt={Event_Image_2} />
          </div>
          <div data-aos="zoom-in" className={`${styles.event_family_fish} col-md-4 `}>
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
