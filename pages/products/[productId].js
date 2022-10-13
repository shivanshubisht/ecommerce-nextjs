import Image from "next/image"

function product({ product }) {
    return (
        <>
            <h2>{product.id} {product.title}</h2>
            <p>{product.body}</p>
            {/* import images from fakesstore api */}
            <Image src={product.image} alt={product.title} width={300} height={300} />
            <button
                className="snipcart-add-item"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-url={`/products/${product.id}`}
                data-item-image={product.image}
                data-item-name={product.name}
            >
                Add to Cart
            </button>
        </>
    )
}

export default product

export async function getStaticPaths() {
    const respone = await fetch('https://fakestoreapi.com/products')
    const data = await respone.json()
    const paths = data.map((product) => {
        return {
            params: {
                productId: `${product.id}`
            }
        }
    })
    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
    const data = await response.json()
    return {
        props: {
            product: data,
        }
    }
}