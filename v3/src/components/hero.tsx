// tell nextjs to render on the client side
"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div>
        <div>
          <div>
            <Image src={"/person-wave.png"} alt="Person Image" width={400} height={400} priority={true} />
            <span>Hi</span>
          </div>
          <h1>My Name is Jason James &</h1>
          <p>I like web development 👨🏽‍💻</p>
        </div>
        <div>
          <a href="#">Icon</a>
        </div>
        <div>
          <a href="#">Talk to me</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
