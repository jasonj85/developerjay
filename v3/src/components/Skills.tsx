// tell nextjs to render on the client side
"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { skillsData } from "@/assets";
import { motion } from "framer-motion";

const Skills = () => {
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-20 px-96">
      <Heading text={"Skills"} />
      <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
        {skillsData.map((skill, i) => (
          <motion.div
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover={{scale: 1.1}}
            viewport={{margin: "50px", once: true}}
            key={i}
            className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-5 py-2 lg:px-2"
          >
            <Image
              src={skill.icon}
              alt={skill.name + " image"}
              width={100}
              height={100}
              className="h-auto w-[40px]"
            />
            <p className="text-sm text-gray-600">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
