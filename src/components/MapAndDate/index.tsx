import { useState, useEffect } from 'react';
import styles from "./MapAndDate.module.css"

const MapAndDate = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Cập nhật mỗi giây

        // Xóa interval khi component unmount
        return () => clearInterval(timerID);
    }, []); // useEffect chỉ chạy một lần sau khi component mount

    return (
        <section className='my-4'>
            <div className='container'>
                <div className={styles.title}>
                    <h3>CONTACT ADDRESS</h3>
                </div>
                <div className={styles.map_date}> <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.172415216631!2d-74.03969482371106!3d40.09386867149341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c18621bb20dec7%3A0x2591b3f455f36651!2sJenkinson&#39;s%20Aquarium!5e0!3m2!1svi!2s!4v1706841286456!5m2!1svi!2s"
                    width="800"
                    height="400"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                    <div className={styles.date}>
                        <h5>{currentDateTime.toLocaleTimeString()}</h5>
                        <span>{currentDateTime.toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapAndDate;
