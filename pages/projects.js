// import Layout from "../components/layout";
// import Head from "next/head";
// import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
// import BackHome from "../components/backToHome";
// import Socials from "../components/socials";
import { AiOutlineLink } from "react-icons/ai";
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect, useState, useCallback } from "react";
import items from "../data/items";

export default function Projects() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const handleScrollTo = (index) => {
    scrollTo(index);
    setSelectedIndex(index);
  };

  return (
    <main className="projects-container">
      {/* <Layout>
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
                    src="/images/firstAideIcon.png"
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
                    src="/images/photo-lab-logo.jpg"
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
                    src="/images/bark_logo.jpg"
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
                    src="/images/Tweeter1.png"
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
                    src="/images/tinyapplogo.jpg"
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

      <Socials /> */}
        <div id="projects" className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {items.responsive.map((item) => (
            <div className="embla__slide" key={item.id}>
              <div className="overflow-hidden cursor-pointer lg:w-1/2">
                <Link href={item.url1}>
                  <>
                    <div className="absolute z-10 flex items-center justify-center w-full h-full text-3xl font-bold text-white bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={800}
                        height={514}
                        className="responsive-image rounded-lg shadow-xl"
                        placeholder="blur"
                        blurDataURL={item.image}
                      />
                    </div>
                  </>
                </Link>

                <div className="flex flex-col space-y-4 lg:w-4/5 lg:space-x-20 lg:justify-center">
                  <h1>{item.title}</h1>
                  <p>
                    {item.description}
                    {item.url2 && (
                      <Link href={item.url2}>
                        <AiOutlineLink /> First Aide Server Link
                      </Link>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      {embla && (
        <div className="scroll-index">
          <div className="flex items-center justify-center mt-5 space-x-2">
            {items.responsive.map((item, index) => (
              <button
                key={index}
                className={`${index === selectedIndex ? "active" : "inactive"}`}
                onClick={() => handleScrollTo(index)}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>

    </main>
  );
}
