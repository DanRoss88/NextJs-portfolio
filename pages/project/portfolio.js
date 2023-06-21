import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Socials from "../../components/socials";

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>I made this Portfolio</title>
      </Head>
      <main className="container">
        <section className="text-gray-600 body-font">
          <h1 className={utilStyles.headingXl}>My Portfolio</h1>
          <div className={utilStyles.projectPicture}>
            <Image
              src="/images/portfolio.png"
              alt="PhotoLabs"
              width={720}
              height={360}
            />
          </div>
          <br />
          <div className={utilStyles.list}>
            <Link href="https://github.com/DanRoss88/NextJs-portfolio">
              Portfolio code
            </Link>
          </div>
          <p>
            This portfolio started out as a NextJs blog tutorial. I then
            customized it to my liking and added a few features of my own. I
            used NextJs, React, and CSS to build this portfolio.
          </p>
        </section>
        <div className={utilStyles.backToHome}>
          <Link href="/projects">← Back to Projects</Link>
        </div>
        <Socials />
      </main>
    </Layout>
  );
}
