import Layout from "../components/layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import BackHome from "../components/backToHome";
import Socials from "../components/socials";

export default function Projects() {
  return (
    <main className="container">
      <Layout>
        <Head>
          <title>Projects</title>
        </Head>

        <h1 className={utilStyles.headingXl}>Projects</h1>
        <p className={utilStyles.lightText}>
          Here are some of the projects I've worked on.
        </p>
      </Layout>
      <ul className={`${utilStyles.gridList} ${utilStyles.gridContainer}`}>
        <li className={`${utilStyles.listItem} bg-white rounded-lg p-4 shadow`}>
          <Link href="/project/first-aide">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32">
                <div className={utilStyles.projectsImg}>
                  <Image
                    src="/images/first-aide-icon.png"
                    alt="First Aide"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
              <span className="mt-2 text-center">First Aide</span>
            </div>
          </Link>
        </li>
        <li className={`${utilStyles.listItem} bg-white rounded-lg p-4 shadow`}>
          <Link href="/project/photo-lab">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32">
                <div className={utilStyles.projectsImg}>
                  <Image
                    src="/images/photo-labs.jpg"
                    alt="photo-lab"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
              <span className="mt-2 text-center">PhotoLabs</span>
            </div>
          </Link>
        </li>
        <li className={`${utilStyles.listItem} bg-white rounded-lg p-4 shadow`}>
          <Link href="/project/bArk">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32">
                <div className={utilStyles.projectsImg}>
                  <Image
                    src="/images/bark_logo.png"
                    alt="bArk"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
              <span className="mt-2 text-center">bArk</span>
            </div>
          </Link>
        </li>
        <li className={`${utilStyles.listItem} bg-white rounded-lg p-4 shadow`}>
          <Link href="/project/tweeter">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32">
                <div className={utilStyles.projectsImg}>
                  <Image
                    src="/images/Tweeter.png"
                    alt="Tweeter"
                    width={180}
                    height={140}
                  />
                </div>
              </div>
              <span className="mt-2 text-center">Tweeter</span>
            </div>
          </Link>
        </li>
        <li className={`${utilStyles.listItem} bg-white rounded-lg p-4 shadow`}>
          <Link href="/project/tinyapp">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32">
                <div className={utilStyles.projectsImg}>
                  <Image
                    src="/images/tinyapplogo.png"
                    alt="Tinyapp"
                    width={180}
                    height={140}
                  />
                </div>
              </div>
              <span className="mt-2 text-center">TinyApp</span>
            </div>
          </Link>
        </li>
        <li className={`${utilStyles.listItem} bg-white rounded-lg p-4 shadow`}>
          <Link href="/project/portfolio">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32">
                <div className={utilStyles.projectsImg}>
                  <Image
                    src="/images/portfolioLogo.jpg"
                    alt="Tinyapp"
                    width={180}
                    height={140}
                  />
                </div>
              </div>
              <span className="mt-2 text-center">This Portfolio</span>
            </div>
          </Link>
        </li>
      </ul>

      <Socials />
    </main>
  );
}
