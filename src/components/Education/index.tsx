import styles from "./education.module.css";
import { education } from "../../data/education";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

type EducationType = {
  id: number;
  title: string;
  content: string;
  img: string;
};

const SingleEducation = ({
  education
}: {
  education: EducationType;
}) => {
  AOS.init();
  return (
    <div data-aos="fade-up"
      data-aos-duration="2000" className={`${styles.education_item} mx-3`}>
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <section data-aos="fade-up"
      data-aos-duration="2000" className="education my-5">
      <div className={`${styles.education_flexbox} container`}>
        <h3>EDUCATIONAL PROGRAMS</h3>
        <Slider {...sliderSettings} className={styles.slider}>
          {education.map((item: EducationType) => (
            <SingleEducation key={item.id} education={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Education;
