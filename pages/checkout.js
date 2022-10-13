import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { useSession } from 'next-auth/react'
import axios from 'axios';
const stripePromise = loadStripe("pk_test_51LmOdOSAsh4SL9T9mfjv7LKDsi72utAsVX3DiAVO4Hsog65gXHk4NvrScY9aEKG74Hs3NL7KxVQNKwBkax5yXzOD008szCbldg");
import { cart, CartState, useCart } from "../context/Context"

function Checkout() {
    const { getTotalItems, getTotalPrice, cart } = useCart();
    console.log(cart);
    const items = cart.map((item) => ({
        name: item.title,
        price: item.price,
        id: item.id,
        category: item.category,
        image: item.image,

    }))

    const email = "abcd@gmail.com"
    const createCheckoutSession = async () => {
        const stripe = await stripePromise;
        
        const checkoutSession = await axios.post("/api/create-checkout-session",
            {
                items: items,
                email: email
            })

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })

        // redirect to stripe checkout
        if (result.error) {
            alert(result.error.message);
        }
    }

    return (
        <>
            <h1>Checkout Page</h1>
            <button onClick={createCheckoutSession} className="product-btn">Proceed to Checkout</button>
        </>
    )
}

export default Checkout




