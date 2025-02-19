"use client";

import { motion } from "framer-motion";

import { CardDetails } from "@/libs/data";

import FlipCard from "../FlipCard";

const variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
      type: "spring",
      stiffness: 100,
      damping: 10,
      bounce: 0.25,
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};
const WhatWeDo = () => {
  return (
    <section className="w-full   ">
      <div className=" lg:w-10/13 w-11/12  lg:pb-[50px]  py-[0px] mx-auto ">
        <div className="w-full  grid md:grid-cols-2 lg:grid-cols-3  gap-[20px] mt-[30px] mx-auto ">
          {CardDetails.map((card) => (
            <motion.div
              variants={variants}
              initial="initial"
              whileInView="animate"
              whileHover={{
                scale: 1.02,
              }}
              custom={card.id}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              key={card.id}
              className="w-full mb-5 md:w-full h-[400px]  md:col-span-1 mx-auto text-center rounded-[20px]   "
            >
              <FlipCard card={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
