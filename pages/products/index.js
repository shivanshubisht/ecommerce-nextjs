import Card from '../components/Card';
import Navbar from '../components/Navbar'
import Slider from '../components/Slider';
import Cart from '../components/Cart';
import SearchBar from '../components/SearchBar';
import link from 'next/link'

const Home = ({ products }) => {

    return (
        <>
            <Cart />
            <Slider />
            <SearchBar />
            <Card products={products} />
        </>
    )

}

export default Home

export async function getStaticProps() {
    const respone = await fetch('https://fakestoreapi.com/products')
    const data = await respone.json()

    return {
        props: {
            products: data,
        }
    }
}

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