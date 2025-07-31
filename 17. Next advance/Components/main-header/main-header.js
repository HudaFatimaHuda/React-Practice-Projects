import Link from 'next/link'
import logoImg from '@/assets/logo.png'
import styles from './main-header.module.css'
import Image from 'next/image'
import MainHeaderBackground from './main-header-background';
import { NavLink } from './nav-links';

function MainHeader() {
 
  return (
    <>
      <MainHeaderBackground/>
      <header className={styles.header}>
        <Link href='/' className={styles.logo}>
          <Image src={logoImg} priority alt='A plate with food on it'/>
          Next Level Food
        </Link>
        <nav className={styles.nav}>
          <NavLink href='/meals'>Meals</NavLink>
          <NavLink href='/community'>Community</NavLink>
        </nav>
      </header>
    </>
  )
}

export default MainHeader
