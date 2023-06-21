import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import profile from "../public/images/DanHeadShot.jpeg"
import Navbar from "./navbar";

const name = "Dan Ross";
export default function Header({ home }) {
  return (
    <header className={utilStyles.header}>
     <Navbar />
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