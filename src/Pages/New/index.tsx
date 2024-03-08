import { Link } from "react-router-dom";
import styles from "./new.module.css";
import blog_img_1 from "../../../public/images/blog_image1.jpg";
import blog_img_2 from "../../../public/images/blog_image2.png";
import blog_img_3 from "../../../public/images/blog_image3.jpg";
import blog_img_content_2 from "../../../public/images/blog_image_content2.jpg";
import blog_img_content_3 from "../../../public/images/blog_image_content3.jpg";
import blog_img_content_4 from "../../../public/images/blog_image4.png";
import { FaAngleRight } from "react-icons/fa6";

const New = () => {
  return (
    <div className={`${styles.blog} my-3`}>
      <div className="container">
        <div className={styles.title}>
          <h1>NEWS</h1>
        </div>
        <div className={`${styles.blog_img} row`}>
          <div className={`${styles.blog_img_title} col-12 `}>
            <h5>FEATURED NEWS</h5>
            <div className={styles.border_title}></div>
          </div>
          <div className={`${styles.blog_img_left} col-12 col-md-7`}>
            <div className={styles.blog_img_one}>
              <Link to="/NewChildrenOne">
                <div className={styles.img_one_img}>
                  <img src={blog_img_1} alt="" />
                </div>
                <div className={styles.img_one_content}>
                  <span>5 Ways Keeping Fish May Help Reduce Stress</span>
                </div>
              </Link>
            </div>
          </div>
          <div className={`${styles.blog_img_right} col-12 col-md-5`}>
            <div className={styles.blog_img_two}>
              <Link to="/NewChildrenTwo">
                <div className={styles.img_two_img}>
                  <img src={blog_img_2} alt="" />
                </div>
                <div className={styles.img_two_content}>
                  <span>What Can Fish Eat As Treats?</span>
                </div>
              </Link>
            </div>
            <div className={styles.blog_img_three}>
              <Link to="/NewChildrenThree">
                <div className={styles.img_three_img}>
                  <img src={blog_img_3} alt="" />
                </div>
                <div className={styles.img_three_content}>
                  <span>Do Fish Need Protein?</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.blog_main_content}>
          <div className={`${styles.new_item} row`}>
            <div className={`${styles.img} col-12 col-md-4`}>
              <img src={blog_img_content_4} alt="" />
            </div>
            <div className={`${styles.content} col-12 col-md-8`}>
              <div className={styles.main_content_title}>
                <h3>5 Ways Keeping Fish May Help Reduce Stress</h3>
              </div>
              <div className={styles.main_content_content}>
                <span>
                  Sometimes sitting in front of an aquarium full of gentle fish
                  is enough to let all your cares drift away. The soft swish of
                  fins, their beautiful colors...
                </span>
              </div>
              <div className={styles.main_content_day}>
                <p>by: Adim / 02 Feb 2024</p>
              </div>
              <div className={styles.main_content_more}>
                <Link to="/NewChildrenOne">
                  Read more <FaAngleRight />
                </Link>
              </div>
            </div>
          </div>
          <div className={`${styles.new_item} row`}>
            <div className={`${styles.img} col-12 col-md-4`}>
              <img src={blog_img_content_2} alt="" />
            </div>
            <div className={`${styles.content} col-12 col-md-8`}>
              <div className={styles.main_content_title}>
                <h3>What can fish eat as treats?</h3>
              </div>
              <div className={styles.main_content_content}>
                <span>
                  Humans and fish alike appreciate treats now and then. By
                  offering some tasty morsels to your pets, they will look...
                </span>
              </div>
              <div className={styles.main_content_day}>
                <p>by: Adim / 25 Jan 2024</p>
              </div>
              <div className={styles.main_content_more}>
                <Link to="/NewChildrenTwo">
                  Read more <FaAngleRight />
                </Link>
              </div>
            </div>
          </div>
          <div className={`${styles.new_item} row`}>
            <div className={`${styles.img} col-12 col-md-4`}>
              <img src={blog_img_content_3} alt="" />
            </div>
            <div className={`${styles.content} col-12 col-md-8`}>
              <div className={styles.main_content_title}>
                <h3>Do fish need protein?</h3>
              </div>
              <div className={styles.main_content_content}>
                <span>
                  Do fish need protein? In short, the answer is yes. But the
                  full answer is more complicated. Different species of fish
                  crave different types of protein...
                </span>
              </div>
              <div className={styles.main_content_day}>
                <p>by: Adim / 30 Dec 2023</p>
              </div>
              <div className={styles.main_content_more}>
                <Link to="/NewChildrenThree">
                  Read more <FaAngleRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
