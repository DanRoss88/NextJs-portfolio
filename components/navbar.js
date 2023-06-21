import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'



export default function Navbar() {

  return (
<nav className='navbar'>
  
<Link href="/" passHref>
  <span className={utilStyles.navLink}>Home</span>
</Link>
<Link href="/projects" passHref>
  <span className={utilStyles.navLink}>Projects</span>
</Link>
<Link href="/resume" passHref>
  <span className={utilStyles.navLink}>Resume</span>
</Link>
<Link href="/contact" passHref>
  <span className={utilStyles.navLink}>Contact</span>
</Link>
</nav>

  )
}