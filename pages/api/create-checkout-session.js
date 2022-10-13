

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { items, email } = req.body;
    console.log(items);
    console.log(email);
    //stripe accepts data items in this format that is why we have to transform it
    const transformedItems = items.map((item) => ({
        quantity: 1,
        price_data: {
            currency: 'inr',
            unit_amount: item.price * 100,
            product_data: {
                name: item.name,
                description: item.description,
                images: [item.image],
            }
        }
    }));
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        // shipping_rates: ['shr_1LrkUVSAsh4SL9T9a8Pn5xoX'],
        shipping_address_collection: {
            allowed_countries: ['IN', 'US', 'CA'],
        },
        line_items: transformedItems,
        mode: 'payment',

        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
        }
    })
    res.status(200).json({ id: session.id });

}







