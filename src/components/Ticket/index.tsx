
import styles from "./ticket.module.css";
import { FaBookmark, FaTicket, FaUserCheck, FaCheck } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { useShoppingContext } from "../../contexts/ShoppingContext";

type ticketType = {
  id: number;
  name: string;
  age: string;
  booked: string;
  price: number;
};


const Ticket = () => {

  const { addCardItem } = useShoppingContext()

  const [ticket, setTicket] = useState<ticketType[]>([]);

  useEffect(() => {
    console.log("get Tikcet data from API")
    const fetchTicket = async () => {
      try {
        const res = await axios.get('http://localhost:5173/ticket')
        console.log("Ticket =>", res)
        setTicket(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTicket()
  }, [])

  return (
    <section className="ticket">
      <div className={`${styles.main_ticket} container`}>
        <h1>TICKET</h1>
        {ticket.map(item => {
          return (
            <div key={item.id} className={styles.ticket_item}>
              <h3 className={`${styles.ticket_name} col-md-4`}>{item.name}</h3>
              <div className={`${styles.ticket_content} col-m-4`}>
                <span>
                  <FaBookmark /> Available Tomorrow
                </span>
                <p className={styles.ticket_age}><FaUserCheck /> Age: {item.age}</p>
                <p className={styles.ticket_required}><FaTicket /> Ticket Redemption Not Required</p>
                <p className={styles.ticket_booked}><FaCheck /> {item.booked} BOOKED</p>
              </div>
              <strong className={`${styles.ticket_price} col-md-2`}>Price: {item.price}$</strong>
              <div className={`${styles.ticket_booking} col-md-2`}>
                  <a onClick={() => addCardItem(item)} href="javascript:void(0)">BOOKING</a>         
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Ticket;
