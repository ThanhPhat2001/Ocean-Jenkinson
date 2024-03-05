import { FaTrashCan } from "react-icons/fa6";
import styles from "./CartItem.module.css";
import { useShoppingContext } from "../../contexts/ShoppingContext";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
    const { cartItems, increaseQty, decreaseQty, removeCardItem, totalPrice, clearCard } =
        useShoppingContext();

    const navigate = useNavigate();

    return (
        <div>
            {cartItems.length === 0 ? (
                <h3 className={styles.emptyCart}>Your shopping cart is empty</h3>
            ) : (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>$ {item.price}</td>
                                <td>
                                    <button className="btn btn-sm btn-primary mx-2" onClick={() => decreaseQty(item.id)}>-</button>
                                    {item.qty}
                                    <button className="btn btn-sm btn-primary mx-2" onClick={() => increaseQty(item.id)}>+</button>
                                </td>
                                <td>$ {item.price * item.qty}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger" onClick={() => removeCardItem(item.id)}><FaTrashCan /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
             {cartItems.length > 0 &&<div className={styles.totalPrice}>
                <span>Total: ${totalPrice}</span>
                <button className="btn btn-sm btn-danger" onClick={clearCard}>Remove ALL</button>
            </div>}

            <button className="btn btn-sm btn-success" onClick={() => { navigate('/ticket') }}>Back To Ticket</button>
        </div>
    );
};

export default CartItem;
