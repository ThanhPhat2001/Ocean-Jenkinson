import { ticket } from "../../data/ticket";
import styles from "./ticket.module.css";
import { FaBookmark, FaTicket, FaUserCheck, FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

type ticketType = {
  id: number;
  name: string;
  age: string;
  booked: string;
  price: number;
};

const SingleTicket = ({ ticket }: { ticket: ticketType }) => {
  AOS.init();
  return (
    <div data-aos="fade-up"
      data-aos-duration="2000" className={styles.ticket_item}>
      <h3 className={`${styles.ticket_name} col-md-4`}>{ticket.name}</h3>
      <div className={`${styles.ticket_content} col-m-4`}>
        <span>
          <FaBookmark /> Available Tomorrow
        </span>
        <p className={styles.ticket_age}><FaUserCheck /> Age: {ticket.age}</p>
        <p className={styles.ticket_required}><FaTicket /> Ticket Redemption Not Required</p>
        <p className={styles.ticket_booked}><FaCheck /> {ticket.booked} BOOKED</p>
      </div>
      <strong className={`${styles.ticket_price} col-md-2`}>Price: {ticket.price}$</strong>
      <div className={`${styles.ticket_booking} col-md-2`}>
        <Link to="/Booking">
          Booking
        </Link>
      </div>
    </div>
  );
};

const Ticket = () => {

  return (
    <section data-aos="fade-up"
      data-aos-duration="2000" className="ticket">
      <div className={`${styles.main_ticket} container`}>
        <h3>TICKET</h3>
        {ticket.map((item: ticketType) => (
          <SingleTicket key={item.id} ticket={item} />
        ))}
      </div>
    </section>
  );
};

export default Ticket;
