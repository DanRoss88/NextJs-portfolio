import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <strong>Dan</strong>. I'm a full-stack web developer. You can contact me on <Link href="https://github.com/danross88">Github</Link> or <Link href="https://linkedin.com/in/dan-ross-webdev">LinkedIn</Link>.</p>
        </section>
        <section className={utilStyles.headingMd}>
        <p>Here's some of my past projects.</p>
        <br /> 
        <Link href="https://github.com/danross88/first-aide-client">First Aide</Link><Link href="https://github.com/danross88/first-aide-server">First Aide Server</Link><p>
        First Aide is an AI-powered personal health assistant that utilizes speech recognition and Open AI to provide medical related advice. It also keeps track of personal medical records.</p>
        <br />

      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
           <Link href={`/posts/${id}`}>{title}</Link>
           <br />
           <small className={utilStyles.lightText}>
             <Date dateString={date} />
           </small>
         </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}