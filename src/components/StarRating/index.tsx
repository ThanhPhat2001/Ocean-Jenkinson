import  { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styles from "./starrating.module.css";

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const getRatingText = (ratingValue: number) => {
        switch (ratingValue) {
            case 1:
                return "Bad";
            case 2:
                return "Poor";
            case 3:
                return "Fair";
            case 4:
                return "Good";
            case 5:
                return "Excellent";
            default:
                return "";
        }
    };

    const handleStarClick = (ratingValue: number) => {
        if (ratingValue === rating) {
            setRating(0); // Hủy chọn nếu click lần thứ hai vào cùng rating
            setIsClicked(false);
        } else {
            setRating(ratingValue);
            setIsClicked(true); // Đặt biến state thành true khi người dùng click vào
        }
    };

    const handleStarHover = (ratingValue: number) => {
        setHover(ratingValue);
    };

    return (
        <div className={styles.star}>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => handleStarClick(ratingValue)}
                        />
                        <FaStar
                            color={(ratingValue <= (hover || rating)) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => handleStarHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                        />
                    </label>
                );
            })}
            {isClicked && (
                <span className={styles.hoverText}>{getRatingText(rating || hover)}</span>
            )}
        </div>
    );
};

export default StarRating;
