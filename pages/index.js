import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Contact from "../components/contact";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
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
          Here is a link to my{" "}
          <Link href="https://flowcv.com/resume/9th3fq6rpv">resume</Link>.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>These are some of my past projects. </p><Link href="/projects"><AiOutlineArrowRight /></Link>
           
      </section>

    <Contact />
    </Layout>
  );
}
