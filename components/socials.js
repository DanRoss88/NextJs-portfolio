import Link from "next/link";
import styles from "../styles/utils.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Socials() {
  return (
    <main className={styles.socials}>
      <section classNam={styles.nav}>
        <div className={styles.margin}>
          <Link href="https://github.com/danross88">
            <AiFillGithub /> Github
          </Link>
        </div>
        <div className={styles.margin}>
          <Link href="https://linkedin.com/in/dan-ross-webdev">
            <AiOutlineLinkedin /> Linkedin
          </Link>
        </div>
      </section>
    </main>
  );
}
