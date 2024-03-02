import history_background from "../../../public/images/history_background.jpg";
import history_content_background from "../../../public/images/history_background_content.png"
import styles from "./history.module.css";

const History = () => {
  return (
    <div className={`${styles.history} container`}>
      <div className={styles.title}><h1>OUR MISSION</h1></div>
      <div className={styles.background}>
        <div className={styles.main_background}>
          <img src={history_background} alt="" />
        </div>
        <div className={styles.content_background}>
          <img src={history_content_background} alt="" />
        </div>
      </div>
      <div className={styles.content}>
        <p><span>Jenkinson’s Aquarium is a privately owned facility located on the boardwalk in Point Pleasant Beach, NJ.
          <br />
          Opening in June of 1991, Jenkinson’s Aquarium has proven to be a valuable educational and recreational resource, as evidenced by its growing popularity. The aquarium is dedicated to educating the public on all aspects of marine life and conservation. Each exhibit is designed to promote awareness of the animals, their habitats and conservation.</span></p>
        <p><span>Exhibits such as Atlantic sharks, Pacific sharks, coral reefs, penguins, and seals give you the opportunity to get up close to animals from around the globe. Another attraction, the touch tank, allows visitors to touch live animals ranging from a sea star to a sting ray!</span></p>
        <p><span>In addition to the educational exhibits, the aquarium offers workshops for children of all ages, as well as professional development workshops for teachers and group tours for schools and scout groups. Groups are provided a general tour of the building and can choose between a number of Focus Programs that will highlight a chosen topic. If your group is unable to make it to the aquarium, we can come to you through our Outreach Program. If you are looking for somewhere special to have your child’s birthday party, the aquarium is just the place. We offer a Perky the Penguin Birthday Party for children turning four years or older. The aquarium is also available for evening functions such as wedding receptions, corporate parties or business meetings. For those who wish to volunteer their time, Jenkinson’s Aquarium has an extensive volunteer program for those over the age of sixteen. The aquarium staff, including volunteers, participate in many community programs including Adopt-a-Highway and NJ Community Water Watch.</span></p>
        <p><span>Either in the community or at the aquarium, our staff will greet you in a courteous and professional manner. The staff is on hand to answer any of your questions while visiting, making it an enjoyable and educational experience. On your way out, you can take the fun home with you after browsing through our aquarium Gift Shop which has an extensive selection of marine related products.</span></p>
        <p><span>Jenkinson’s Aquarium is accredited by the Association of Zoos and Aquariums (AZA). AZA is America’s leading accrediting organization for zoos and aquariums, and accredits only those institutions that have achieved rigorous, professional standards for animal welfare and management, veterinary care, wildlife conservation and research, education, safety, staffing, and more.</span></p>
        <p><span>The aquarium is open all year for your convenience, closing only on Thanksgiving, Christmas and New Year’s Day. If you would like information on the aquarium, educational workshops, our Outreach Program, birthday parties or rentals, please call (732) 899-1212. For information on group tours, please call Group Sales at (732) 892-3274. We look forward to hearing from you!</span></p>
      </div>
    </div>
  )
}

export default History