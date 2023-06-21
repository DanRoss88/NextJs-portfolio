import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Socials from "../../components/socials";
import { AiOutlineLink } from "react-icons/ai";

export default function TinyApp() {
  return (
    <Layout>
      <Head>
        <title>TinyApp</title>
      </Head>
      <main className="container">
        <section className="text-gray-600 body-font">
          <h1 className={utilStyles.headingXl}>TinyApp</h1>
          <div className={utilStyles.projectPicture}>
            <Image
              src="/images/tinyapp.png"
              alt="tinyapp"
              width={720}
              height={360}
            />
          </div>
          <br />
          <div className={utilStyles.list}>
            <Link href="https://github.com/DanRoss88/tinyapp">
              <AiOutlineLink /> TinyApp
            </Link>
          </div>
          <p>
            TinyApp was the first full-stack web application that I built. It
            allows users to shorten long URLs. It was built using Node.js and
            Express.
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
