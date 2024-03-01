import  { useState } from 'react';
import StarRating from "../../components/StarRating";
import styles from "./education.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { education } from "../../data/education";
import { FaCalendarDays, FaClock, FaHeartCircleCheck, FaRegHeart } from 'react-icons/fa6';


type EducationType = {
  id: number;
  title: string;
  time: string;
  day: string;
  like: number;
  img: string;
};

const SingleEducation = ({ education }: { education: EducationType }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(education.like);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prevCount => prevCount - 1);
    } else {
      setLikeCount(prevCount => prevCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className={styles.education_flexbox}>
      <img src={education.img} alt="" />
      <div className={styles.education_content}>
        <h3>{education.title}</h3>
        <div className={styles.education_time}>
          <i><FaClock /></i>
          <span>{education.time}</span>
        </div>
        <div className={`${styles.education_day} my-2`}>
          <i><FaCalendarDays /></i>
          <span>{education.day}</span>
        </div>
        <div className={`${styles.education_like} d-flex my-2`} onClick={handleLike}>
          <i><FaHeartCircleCheck /></i>
          <strong>{likeCount}</strong>
          <p>{liked ? <FaHeartCircleCheck style={{ color: 'red' }} /> : <FaRegHeart />}</p>
        </div>
        <StarRating />
      </div>
    </div>
  );
};

const Ticket = () => {
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
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992 ,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  }
  return (
    <section className={`${styles.education}`}>
      <h1>Educational Programs</h1>
      <Slider {...sliderSettings} className={`${styles.slider} container` }>
        {education.map((item: EducationType) => (
          <SingleEducation key={item.id} education={item} />
        ))}
      </Slider>
    </section>
  );
};

export default Ticket;
