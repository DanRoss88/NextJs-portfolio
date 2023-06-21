import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Contact from "../../components/contact";

export default function bArk() {
  return (
    <Layout>
      <Head>
        <title>bArk</title>
      </Head>
      <main className="container">
        <section className="text-gray-600 body-font">
          <h1 className={utilStyles.headingXl}>bArk</h1>
          <div className={utilStyles.projectPicture}>
            <Image
              src="/images/bArk-read-story.png"
              alt="PhotoLabs"
              width={720}
              height={360}
            />
          </div>
          <br />
          <div className={utilStyles.list}>
            <Link href="https://github.com/DanRoss88/bArk">
              bArk
            </Link>
          </div>
          <p>
          bArk is a full-stack web application that allows users to create, read, update and delete stories. It was built using React, Node, Express and PostgreSQL. It was my first collaborative effort and was built as a group project with 2 other developers.

          </p>
        </section>
        <div className={utilStyles.backToHome}>
          <Link href="/projects">← Back to Projects</Link>
        </div>
        <Contact />
      </main>
    </Layout>
  );
}
