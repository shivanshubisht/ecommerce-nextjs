import Card from './components/Card';
import Slider from './components/Slider';
import SearchBar from './components/SearchBar';

const Home = ({ products }) => {

  return (
    <>
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