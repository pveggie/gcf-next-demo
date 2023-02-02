import Header from '@/components/layout/Header'

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className={`container py-5 overflow-hidden`}>{children}</main>
    </div>
  )
}

export default Layout
