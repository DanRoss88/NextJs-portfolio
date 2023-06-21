import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import Head from "next/head";
import styles from "../../styles/utils.module.css";
import Socials from "../../components/socials";

export default function FirstAide() {
  return (
    <Layout>
      <Head>
        <title>First Aide</title>
      </Head>
      <main className="container">
        <section className="text-gray-600 body-font">
          <h1 className={styles.headingXl}>First Aide</h1>
          <div className={styles.firstAidePic}>
            <Image
              src="/images/speech-recognition.gif"
              alt="First Aide"
              width={720}
              height={480}
            />
          </div>
          <br />
          <div className={styles.gridList}>
            <Link href="https://github.com/danross88/first-aide-client">
              First Aide
            </Link>
            <br />
            <Link href="https://github.com/danross88/first-aide-server">
              First Aide Server
            </Link>
          </div>
          <div className={styles.backToHome}>
            <p>
              First Aide is an AI-powered personal health assistant that
              utilizes speech recognition and Open AI to provide medical related
              advice. It also keeps track of personal medical records. This was a collaborative effort for my final project at Lighthouse Labs.
            </p>
          </div>
        </section>
        <div className={styles.backToHome}>
          <Link href="/projects">← Back to Projects</Link>
        </div>
        <Socials />
      </main>
    </Layout>
  );
}
