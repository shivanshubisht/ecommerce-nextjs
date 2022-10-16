import styles from './Cart.module.css'
import { useCart } from '../../../context/Context'
import Card from "../Card";
import Image from 'next/image';


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

            {cart.map((product, index) => {
                return (
                    <div key={index} className={styles.shopCard}>
                        <div className={styles.title}>
                            {product.title}
                        </div>
                        <div className={styles.desc}>
                            {product.category}
                        </div>
                        <div className={styles.slider}>
                            <Image src={product.image} alt={product.name} width={300} height={280} />
                        </div>
                        <div className={styles.price}>
                            ${product.price}
                        </div>
                        <div className={styles.quantity}>
                            <button onClick={() => reduceFromCart(product.id)}>-</button>
                            {itemQuantity(product.id)}
                            <button onClick={() => addToCart(product)}>+</button>
                        </div>
                        <button onClick={() => removeFromCart(product.id)}>Remove</button>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Cart;