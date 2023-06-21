import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import profile from "../public/images/profile.jpg"


const name = "Dan Ross";
export default function Header({ home }) {
  return (
    <header className={utilStyles.header}>
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
      <div className={utilStyles.headerContent}>
        {home ? (
          <>
            <Image
              priority
              src={profile}
              className={utilStyles.borderCircle}
              height={180}
              width={169}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              
                <Image
                  priority
                  src={profile}
                  className={utilStyles.borderCircle}
                  height={180}
                  width={169}
                  alt=""
                />
              
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </div>
    </header>
  );
}