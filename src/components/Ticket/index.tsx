import {ticket}  from '../../data/ticket'
import styles from "./ticket.module.css";
import { FaBookmark, FaTicket, FaUserCheck, FaCheck } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import AOS from 'aos';
import 'aos/dist/aos.css';
import { useShoppingContext } from "../../contexts/ShoppingContext";

type ticketType = {
  id: number;
  name: string;
  age: string;
  booked: string;
  price: number;
};

const SingleTicket = ({ ticketItem }: { ticketItem: ticketType }) => {
  const { addCardItem } = useShoppingContext();

  return (
    <div className={styles.ticket_item}>
      <h3 className={`${styles.ticket_name} col-md-4`}>{ticketItem.name}</h3>
      <div className={`${styles.ticket_content} col-m-4`}>
        <span>
          <FaBookmark /> Available Tomorrow
        </span>
        <p className={styles.ticket_age}><FaUserCheck /> Age: {ticketItem.age}</p>
        <p className={styles.ticket_required}><FaTicket /> Ticket Redemption Not Required</p>
        <p className={styles.ticket_booked}><FaCheck /> {ticketItem.booked} BOOKED</p>
      </div>
      <strong className={`${styles.ticket_price} col-md-2`}>Price: {ticketItem.price}$</strong>
      <div className={`${styles.ticket_booking} col-md-2`}>
          <a onClick={() => addCardItem(ticketItem)} href="javascript:void(0)">BOOKING</a>         
      </div>
    </div>
  );
}


const Ticket = () => {



  return (
    <section className="ticket">
      <div className={`${styles.main_ticket} container`}>
        <h1>TICKET</h1>
        {ticket.map(ticketItem => (
          <SingleTicket key={ticketItem.id} ticketItem={ticketItem} />
        ))}
      </div>
    </section>
  );
};

export default Ticket;
