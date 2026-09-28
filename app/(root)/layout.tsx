import Navbar from "@/components/navbar"
import { navLinks } from "@/constants/navigation"

const Layout = ( { children } : { children: React.ReactNode } ) => {
  return (
    <div>
        <Navbar title="Next.js Demo" links={navLinks} />
        {children}
    </div>
  )
}

export default Layout
