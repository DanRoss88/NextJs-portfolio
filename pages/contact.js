import Layout from "../components/layout"
import Head from "next/head"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"
import Image from "next/image"
import Contact from "../components/contact"


export default function ContactMe() {

  return (
    <Layout>
      <Head>
        <title>Contact Me</title>
      </Head>
      <main className="container">
        
        <div className={utilStyles.list}>
        <br />
        <Image
          src="/images/webdev.png"
          alt="webdev"
          width={240}
          height={240}
        />
        </div>
        <br />

</main>
        <Contact />
    </Layout>


  )

}