import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { ChakraProvider } from '@chakra-ui/react'
import store from '../store'
import theme from '../styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}
