
import { banner } from '../../data/banner';
import styles from "./banner.module.css"

type BannerType = {
    id: number,
    img: string,
    number: number,
    title: string
}

const Banner = () => {

    const SingleBanner = ({banner} : {banner : BannerType}) => {
        return (
            <div className={`${styles.banner_item} col-md-3`}>
                <div className={styles.banner_img}>
                    <img src={banner.img} alt={banner.img} />
                </div>
                <div className={styles.banner_content}>
                <div className={styles.banner_number}>{banner.number}</div>
                <div className={styles.banner_title}>{banner.title}</div>
                </div>
            </div>
        )
    }

  return (
    <section>
      <div className={styles.banner}>
      {banner.map((item: BannerType) => (
          <SingleBanner key={item.id} banner={item} />
        ))}
      </div>
    </section>
  );
};

export default Banner;
