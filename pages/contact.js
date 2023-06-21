import Layout from "../components/layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";
import Socials from "../components/socials";


export default function ContactMe() {
  return (
    <Layout>
      <Head>
        <title>Contact Me</title>
      </Head>
      <main className="container">
        <div className={utilStyles.webdevimg}>
          <br />
          <Image
            src="/images/webdev.png"
            alt="webdev"
            width={240}
            height={240}
          />
        </div>
        <br />

        <div className={utilStyles.contact}>
          <h1 className={utilStyles.headingXl}>Contact</h1>

          <p>
            Send me an email at{" "}
            <Link href="mailto:danielmartinross@gmail.com">
              danielmartinross@gmail.com
            </Link>
          </p>
          
          </div>
      </main>
      
    <Socials />  
    </Layout>
  );
}
