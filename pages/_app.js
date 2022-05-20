import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';


function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider theme={theme}>
      return <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
