import { Provider } from 'next-auth/client'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}
