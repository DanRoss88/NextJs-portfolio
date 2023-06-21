import Layout from "../components/layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import Contact from "../components/contact";


export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <main className="container">
        <h1 className={utilStyles.headingXl}>Projects</h1>
        <p className={utilStyles.lightText}>
          Here are some of the projects I've worked on.
        </p>

        <ul className={`${utilStyles.gridList} grid`}>
          <li className={`${utilStyles.listItem} bg-white rounded-lg p-4 shadow`}>
            <Link href="/project/first-aide">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32">
                  <Image
                    src="/images/first-aide-icon.png"
                    alt="First Aide"
                    width={180}
                    height={180}
                  />
                </div>
                <span className="mt-2 text-center">First Aide</span>
              </div>
            </Link>
          </li>
          <li className={`${utilStyles.listItem} bg-white rounded-lg p-4 shadow`}>
            <Link href="/project/photo-lab">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32">
                  <Image
                    src="/images/photo-labs.jpg"
                    alt="photo-lab"
                    width={180}
                    height={180}
                  />
                </div>
                <span className="mt-2 text-center">PhotoLabs</span>
              </div>
            </Link>
          </li>
          <li className={`${utilStyles.listItem} bg-white rounded-lg p-4 shadow`}>
            <Link href="/project/bArk">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32">
                  <Image
                    src="/images/bark_logo.png"
                    alt="bArk"
                    width={180}
                    height={180}
                  />
                </div>
                <span className="mt-2 text-center">bArk</span>
              </div>
            </Link>
          </li>
          <li className={`${utilStyles.listItem} bg-white rounded-lg p-4 shadow`}>
            <Link href="/project/tweeter">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32">
                  <Image
                    src="/images/Tweeter.png"
                    alt="Tweeter"
                    width={180}
                    height={140}
                  />
                </div>
                <span className="mt-2 text-center">Tweeter</span>
              </div>
            </Link>
          </li>
          <li className={`${utilStyles.listItem} bg-white rounded-lg p-4 shadow`}>
            <Link href="/project/tinyapp">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32">
                  <Image
                    src="/images/tinyapplogo.png"
                    alt="Tinyapp"
                    width={180}
                    height={140}
                  />
                </div>
                <span className="mt-2 text-center">TinyApp</span>
              </div>
            </Link>
          </li>
        </ul>

        <Contact />
      </main>
    </Layout>
  );
}