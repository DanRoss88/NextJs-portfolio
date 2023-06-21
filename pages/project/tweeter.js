import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Socials from "../../components/socials";
import { AiOutlineLink } from "react-icons/ai";

export default function Tweeter() {
  return (
    <Layout>
      <Head>
        <title>Tweeter</title>
      </Head>
      <main className="container">
        <section className="text-gray-600 body-font">
          <h1 className={utilStyles.headingXl}>Tweeter</h1>
          <div className={utilStyles.projectPicture}>
            <Image
              src="/images/Tweeter!.png"
              alt="PhotoLabs"
              width={720}
              height={360}
            />
          </div>
          <br />
          <div className={utilStyles.list}>
            <Link href="https://github.com/DanRoss88/tweeter">
              <AiOutlineLink /> Tweeter
            </Link>
          </div>
          <p>
            Tweeter is a simple, single-page Twitter clone. I took this project
            on to learn more about front-end development and to practice my
            HTML, CSS, JS, jQuery and AJAX front-end skills. I customized the
            design to my liking and added a few features of my own.
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
