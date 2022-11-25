import CartContext from '/context/Context'
import '../styles/globals.css'
import Navbar from '/components/Navbar'


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      <CartContext>
        {/* <Navbar/> */}
        <Component {...pageProps} />
      </CartContext>
    </>
  )
}

export default MyApp