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

          <ul className={utilStyles.list} >
            <li className={utilStyles.listItem} >
              <Link href="/project/first-aide">   
              <Image 
                src="/images/first-aide.png"
                alt="First Aide"
                className={utilStyles.projectPicture}
                width={180}
                height={180}
              />
              First Aide 
              </Link>
            </li>
            <li className={utilStyles.listItem}>
              <Link href="/project/first-aide">
              <Image 
                src="/images/first-aide.png"
                alt="First Aide"
                width={140}
                height={140}
              />
                First Aide 
                </Link>
            </li>
            <li className={utilStyles.listItem}>
              <Link href="/project/first-aide">
              <Image 
                src="/images/first-aide.png"
                alt="First Aide"
                width={200}
                height={200}
              />
                First Aide 
                </Link>
            </li>
            <li className={utilStyles.listItem}>
              <Link href="/project/first-aide">
              <Image 
                src="/images/first-aide.png"
                alt="First Aide"
                width={200}
                height={200}
              />
                First Aide 
                </Link>
            </li>
            <li className={utilStyles.listItem}>
              <Link href="/project/first-aide">
              <Image 
                src="/images/first-aide.png"
                alt="First Aide"
                width={200}
                height={200}
              />
                First Aide 
                </Link>
            </li>
          </ul>
        <Contact/>  
      </main>
    </Layout>
  );
}
