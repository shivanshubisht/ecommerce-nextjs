import Card from './components/Card';
import Navbar from './components/Navbar'
import Slider from './components/Slider';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';

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