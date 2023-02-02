import '@/styles/main.scss'
import Layout from '@/layouts/Layout'

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
