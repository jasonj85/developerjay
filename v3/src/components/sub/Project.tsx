"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ProjectDataModel } from "@/assets/models";
import { motion } from "framer-motion";

interface propTypes {
  data: ProjectDataModel;
  index: number;
}

const Project: React.FC<propTypes> = ({ data, index }) => {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      onClick={() => setShow((show) => !show)}
      className="relative w-[350px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer"
    >
      <Image
        src={`/projects/image-${index + 1}.jpg`}
        alt="Project image"
        width={400}
        height={400}
        className="rounded-lg opacity-70"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-white/95 p-6 rounded-lg"
      >
        <h2 className="text-lg, font-bold tracking-wide text-gray-500">{data.name}.</h2>
        <p className="text-justify text-gray-500 first-letter:pl-2">{data.desc}</p>
      </motion.div>
    </motion.div>
  );
};

export default Project;
