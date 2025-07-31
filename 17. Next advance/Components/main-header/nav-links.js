'use client'
import { usePathname } from 'next/navigation'
import { Link } from 'react-admin'

function NavLink({href, children}) {
    const path = usePathname()
  return (
    <Link href={href} className={path.startsWith(href) ? styles.active : undefined}>{children}</Link>
  )
}

export default NavLink
