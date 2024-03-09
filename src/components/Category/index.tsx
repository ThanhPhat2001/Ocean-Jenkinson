import { useState } from "react";
import styles from "./category.module.css";
import Filter from "../Filter";
import { FaCalendarDays, FaClock, FaEye } from "react-icons/fa6";
import { shark } from "../../data/shark";
import { best } from "../../data/best";
import { dolphin } from "../../data/dolphin";
import { Whale } from "../../data/whale";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import FiveStar from "../FiveStar";

type cardType = {
  id: number;
  name: string;
  image: string;
  description: string;
  duration: string;
  Availability: string;
  View: number;
};

const SingleCategory = ({ category }: { category: cardType }) => {
  return (
    <div>
      <div className={`card ${styles.card}`}>
        <img
          src={category.image}
          alt={category.image}
          className={`card-img-top img-fluid ${styles.marine_lifeImg}`}
        />
        <div className={`${styles.content} ms-3`}>
          <h3 className={`${styles.card_title}`}>{category.name}</h3>
          <div className={styles.card_info}>
            <i>
              <FaClock />
            </i>
            <span>{category.duration}</span>
          </div>
          <div className={styles.card_info}>
            <i>
              <FaCalendarDays />
            </i>
            <span>{category.Availability}</span>
          </div>
          <div className={styles.card_info}>
            <i>
              <FaEye />
            </i>
            <span>View: {category.View}</span>
          </div>
          <FiveStar />
          <div className={`${styles.review}`}>
            <a href="javascript:void(0)" style={{ fontSize: "" }}>
              Some review text goes here...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Category = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("Shark");

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const handleFilterClick = (category: string) => {
    setCurrentCategory(category);
  };

  let currentData: cardType[] = [];

  switch (currentCategory) {
    case "Shark":
      currentData = shark;
      break;
    case "Dolphin":
      currentData = dolphin;
      break;
    case "Whale":
      currentData = Whale;
      break;
    case "Best":
      currentData = best;
      break;
    default:
      currentData = shark;
  }

  return (
    <section className={`${styles.category_item}`}>
      <div className="container">
        <header className="text-center">
          <h2 className={styles.section_item__separate}>OCEAN LIFE</h2>
          <Filter
            currentCategory={currentCategory}
            handleFilterClick={handleFilterClick}
          />
        </header>

        <Slider {...sliderSettings} className={styles.slider}>
          {currentData.map((item: cardType) => (
            <div key={item.id}>
              <SingleCategory category={item} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={`${styles.text_center} my-3 text-center`}>
        <Link to="/SeaImg" className="btn btn-outline-info px-3">
          See more
        </Link>
      </div>
    </section>
  );
};

export default Category;
