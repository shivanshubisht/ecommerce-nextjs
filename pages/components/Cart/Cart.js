import styles from './Cart.module.css'
import { useCart } from '../../../context/Context'
import Card from "../Card";


const Cart = () => {

    const { cart, addToCart, reduceFromCart, removeFromCart, clearCart, isInCart, itemQuantity, getTotalItems, getTotalPrice } = useCart();

    return (
        <div>
            <span>My Cart</span>
            <br />
            <span>Total: ${getTotalPrice()}</span>
            {cart.length === 0 && <div>Cart is empty</div>}
            <br />
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    )
}

export default Cart;