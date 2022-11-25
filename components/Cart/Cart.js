import styles from './Cart.module.css'
import { useCart } from '/context/Context'
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
                            <Image src={product.images[0]} alt={product.name} width={300} height={280} />
                        </div>
                        {/* <div className={styles.quantity}>
                            <button onClick={() => reduceFromCart(product.id)}>-</button>
                            {itemQuantity(product.id)}
                            <button onClick={() => addToCart(product)}>+</button>
                        </div> */}
                        <div className={styles.cta}>
                            <div className={styles.price}>${product.price}</div>
                            {isInCart(product.id) ? (
                                <>
                                    <button className={styles.quantityValue} onClick={() => reduceFromCart(product.id)}>-</button>
                                    <span className={styles.value}>{itemQuantity(product.id)}</span>
                                    <button className={styles.quantityValue} onClick={() => addToCart(product)}>+</button>
                                </>
                            ) : (<>
                                <button
                                    className={styles.btn}
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                    <span className={styles.bg} />
                                </button>
                                <button className={styles.btn} onClick={() => removeFromCart(product.id)}>Remove<span className={styles.bg} /></button>
                            </>
                            )}
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Cart;