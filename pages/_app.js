import '../styles/globals.css'
import { Chakraprovider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return(
    <Chakraprovider>
      return <Component {...pageProps} />
    </Chakraprovider>
  )
}

export default MyApp
