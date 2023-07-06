import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import profile from "../public/images/DanHeadShot.jpeg";
import Navbar from "./navbar";

const name = "Dan Ross";
export default function Header({ home }) {
  return (
    <header className="header">
      {/* <Navbar /> */}
            <Link href="/">
              <Image
                priority
                src={profile}
                className="borderCircle"
                height={180}
                width={169}
                alt=""
              />
            </Link>
            <h2 className="headingLg">
              <Link href="/" className="colorInherit">
                {name}
              </Link>
            </h2>
    </header>
  );
}
