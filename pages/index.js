import Card from '/components/Card';
import Slider from '/components/Slider';
import SearchBar from '/components/SearchBar';
import Navbar from '../components/Navbar/Navbar';

const Home = ({ products }) => {

  return (
    <>
      <Navbar products={products} />
      <Slider />
      <Card products={products} />
    </>
  )

}

export default Home

export async function getStaticProps() {
  const respone = await fetch('https://dummyjson.com/products')
  const data = await respone.json()

  return {
    props: {
      products: data,
    }
  }
}