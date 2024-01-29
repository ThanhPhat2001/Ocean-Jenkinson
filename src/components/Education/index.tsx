import styles from "./education.module.css";
import { education } from "../../data/education";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SingleEducationProps = {
  id: number;
  title: string;
  content: string;
  img: string;
};

const SingleEducation = ({
  education,
}: {
  education: SingleEducationProps;
}) => {
  return (
    <div className={`${styles.education_item} mx-3`}>
      <div className={styles.education_item_small}>
        <div className={styles.education_img}>
          <img src={education.img} alt={education.img} />
        </div>
        <div className={styles.education_content}>
          <h4>{education.title}</h4>
          <p>{education.content}</p>
        </div>
        <p><a href="#">VIEW MORE</a></p>
      </div>
    </div>
  );
};

const Education = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="education my-5">
      <div className={`${styles.education_flexbox} container`}>
        <h3>EDUCATIONAL PROGRAMS</h3>
        <Slider {...sliderSettings} className={styles.slider}>
          {education.map((item: SingleEducationProps) => (
            <SingleEducation key={item.id} education={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Education;
