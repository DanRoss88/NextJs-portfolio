import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Socials from "../components/socials";
import Image from "next/image";
import Projects from "./projects";
import Header from "../components/header";
export default function Home() {
  return (
    // <Layout home>
    <div className="main-container">
      <Head>
        <title>{siteTitle}</title>
      </Head>
    <div className="header-container">
      <Header />
    </div>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <strong>Dan</strong>. As a Full-stack Web Developer with a
          unique background in Culinary Arts, I bring a valuable set of skills
          to the table. My experience has taught me the importance of efficient
          problem-solving, timely execution, and thriving under high-pressure
          environments. These skills have served me well in my current role as a
          Web Developer, where I consistently deliver quality results while
          meeting tight deadlines. I'm always eager to take on new challenges
          and continue growing as a developer. Let's connect and explore how I
          can contribute to your team.
        </p>
      </section>
      <div className = "projects-container" >
        <Projects />
      </div>
      <Socials />
    </div>
    // </Layout>
  );
}
