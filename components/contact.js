import Link from "next/link";
import styles from "../styles/utils.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <main className="container">
      <div className={styles.contact}>
      <h1 className={styles.headingXl}>Contact</h1>
      
      <p>Send me an email at <Link href="mailto:danielmartinross@gmail.com">danielmartinross@gmail.com</Link>
      </p>
      <p>Or find me on:</p>
      <div className={styles.margin}>
      <Link href="https://github.com/danross88"><AiFillGithub /> Github</Link>
      </div>
      <div className={styles.margin}>
      <Link href="https://linkedin.com/in/dan-ross-webdev"><AiOutlineLinkedin/> Linkedin</Link>
      </div>
     </div>
    </main>
    );
}






