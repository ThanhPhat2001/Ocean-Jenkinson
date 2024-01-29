import styles from "./event.module.css";
import Event_great_image from "../../../public/images/great-image-1.jpeg";
import Event_exhibits_image from "../../../public/images/exhibits-image-2.jpeg";
import Event_Image_2 from '../../../public/images/event_image2.jpg'
import { FaFish } from "react-icons/fa6";
import "animate.css";

const Event = () => {
  return (
    <section className={styles.event}>
      <div className="main_event container">
        <div className={`${styles.event_great} d-flex`}>
          <div
            className={`${styles.great_content} animate__animated animate__jackInTheBox col-md-4`}
          >
            <h3>THE AQUARIUM ALWAYS HAS GREAT THINGS GOING ON !</h3>
            <p>
              <a href="#"> VIEW THE CALENDAR </a>
            </p>
          </div>
          <div
            className={`${styles.great_img} animate__animated animate__zoomInRight col-md-4 `}
          >
            <img src={Event_great_image} alt={Event_great_image} />
          </div>
          <div className={`${styles.great_fish} `}>
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
          <div className={`${styles.event_exhibits_fish} col-md-4`}>
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
          <div
            className={`${styles.event_exhibits_img} animate__animated animate__slideInUp  col-md-4`}
          >
            <img src={Event_exhibits_image} alt={Event_exhibits_image} />
          </div>
          <div
            className={`${styles.event_exhibits_content} ${styles.focus_in_contract_bck} animate__animated animate__slideInDown col-md-4`}
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
          <div className={`${styles.event_family_content} animate__animated animate__rubberBand col-md-4 `}>
            <h3>A PLACE TO ENJOY THE WEEKEND FOR EVERY FAMILY</h3>
            <span>
              <a href="#">LEARN MORE</a>
            </span>
          </div>
          <div className={`${styles.event_family_img} animate__animated animate__pulse col-md-4 `}>
            <img src={Event_Image_2} alt={Event_Image_2} />
          </div>
          <div className={`${styles.event_family_fish} col-md-4 `}>
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
