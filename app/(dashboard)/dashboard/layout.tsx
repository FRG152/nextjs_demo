import ThemeToggle from "@/components/theme-toggle"

const Layout = ( { children } : { children: React.ReactNode } ) => {
  return (
    <div>
        <div className="flex items-center justify-between">
          <h1>Dashboard Navbar</h1>
          <ThemeToggle />
        </div>
        {children}
    </div>
  )
}

export default Layout