// import { useShoppingContext}from "../../contexts/ShoppingContext";
import CartItem from "../../components/CartItem"


const CheckOutPage = () => {

  // const { cartItems} = useShoppingContext();

  return (
    <div className='container my-3'>
      <CartItem />
    </div>
  )
}

export default CheckOutPage