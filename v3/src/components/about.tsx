// tell nextjs to render on the client side
"use client";
import Heading from "./sub/Heading";
import Achievements from "./sub/Achievements";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen px-96 flex flex-col items-center justify-center">
      <Heading text={"About Me "} />
      <div>
        <Image src={"/about-me.png"} alt="About me image" width={400} height={400} />
        <div>
          <span>Arrow Left</span>
          <p>About text</p>
          <a href="/jason-james-cv.pdf" download="">
            <span>Download CV</span>
            <span>Download icon</span>
          </a>
        </div>
      </div>
      <div>
        <Achievements />
      </div>
    </div>
  );
};

export default About;
