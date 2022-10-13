import CartContext from '../context/Context'
import '../styles/globals.css'
import Navbar from './components/Navbar'
function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      <CartContext>
        <Navbar />
        <Component {...pageProps} />
      </CartContext>
    </>
  )
}

export default MyApp