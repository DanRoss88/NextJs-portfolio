import { useEffect, useState } from "react";

export default function Page({ children }) {
  const [currentComponent, setCurrentComponent] = useState("home"); // Default component

  const scrollHandler = () => {
    if (typeof window === "undefined") return;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    if (scrollY === 0) {
      // Scroll to the previous component
      // Update the currentComponent state based on your logic for previous component navigation
    } else if (scrollY + windowHeight >= bodyHeight) {
      // Scroll to the next component
      // Update the currentComponent state based on your logic for next component navigation
    }
  };

  useEffect(() => {
    // Attach the scrollHandler as an event listener
    window.addEventListener("scroll", scrollHandler);
    return () => {
      // Clean up the event listener when component unmounts
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []); // Empty dependency array to ensure it only runs once during component mount

  useEffect(() => {
    // Listen for changes in the URL hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Get the value of the hash without the '#'
      setCurrentComponent(hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Call the handler initially to set the current component based on the initial URL hash
    return () => {
      // Clean up the event listener when component unmounts
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div>
      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Resume id="resume" />
      <Contact id="contact" />

      <div
        style={{
          width: "100vw",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          transform: "translateX(" + children.left + "px)",
          animationTimingFunction: "ease-in",
          zIndex: -20,
          transition: "transform .8s ease-in-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}