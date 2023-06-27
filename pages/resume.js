import Layout from "../components/layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineLink } from "react-icons/ai";
import Socials from "../components/socials";

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Resume</title>
      </Head>
      <main className="container">
        <h1 className={utilStyles.headingXl}>Resume</h1>
        <div className={utilStyles.resume}>
        <br />
        <Image
          src="/images/DansResume1.jpg"
          alt="resume"
          width={1024}
          height={791}
        />
        </div>
        <br />
        <div className={utilStyles.list}>
          <Link href="https://flowcv.com/resume/9th3fq6rpv">
            <span className={utilStyles.headingLg}>
              <AiOutlineLink /> Resume
            </span>
          </Link>
        </div>
      </main>
      <Socials />
    </Layout>
  );
}
