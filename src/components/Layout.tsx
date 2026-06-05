import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FloatingReserveButton from './FloatingReserveButton'
import FloatingWhatsAppButton from './FloatingWhatsAppButton'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <FloatingReserveButton />
    </div>
  )
}

export default Layout