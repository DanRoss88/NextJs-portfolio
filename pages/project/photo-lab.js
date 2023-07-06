import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Socials from "../../components/socials";
import { AiOutlineLink } from "react-icons/ai";

export default function PhotoLab() {
  return (
    <Layout>
      <Head>
        <title>PhotoLabs</title>
      </Head>
      <main className="container">
        <section className="text-gray-600 body-font">
          <h1 className={utilStyles.headingXl}>PhotoLabs</h1>
          <div className={utilStyles.projectPicture}>
            <Image
              src="/images/photo-lab.png"
              alt="PhotoLabs"
              width={720}
              height={360}
            />
          </div>
          <br />
          <div className={utilStyles.list}>
            <Link href="https://github.com/DanRoss88/photolabs">
              <AiOutlineLink /> PhotoLabs
            </Link>
          </div>
          <p>
            PhotoLabs is a full-stack web application that allows users to
            upload photos, categorize them into topics and store their
            favourite. It was built using React and Node.js. It was my first
            introduction to React.
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
