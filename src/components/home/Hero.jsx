"use client";
import { ChevronsRight } from "lucide-react";

import MySwiper from "../MySwiper";
import MyTypewriter from "../MyTypewriter";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full bg-accent-light   md:pb-0 ">
      <div className=" md:grid hero-bg relative  lg:pb-0  pt-[120px] grid-cols-1 md:grid-cols-2 w-full md:w-11/12 min-h-screen   mx-auto ">
        <div className=" w-11/12 mx-auto   pt-[40px] lg:pb-[40px] md:text-center lg:text-start md:w-9/12 md:mx-auto lg:w-11/12 lg:mx-0  md:col-span-2 lg:col-span-1  lg:flex flex-col k lg:justify-start">
          <h4 className="heading-4   text-primary-color mb-2 ">
            Trusted By 100+ Creators
          </h4>
          <h1
            className={`heading-1`}
          >
            Financing for{" "}
            <span className="text-primary-color">Influencers </span> and{" "}
            <span className="text-primary-color">Creators </span> in Africa
          </h1>
          <span className="text-[25px] font-[400] lg:flex hidden md:mt-3 text-primary-black ">
            Powering the dreams of {"    "}
            <MySwiper />
          </span>
          <span className="text-[20px] md:h-[30px] font-[400] text-primary-black block h-[40px] mb-[20px] md:mb-0 mt-3 lg:hidden  ">
            Powering the dreams of {"    "}{" "}
            <span className="text-[#050914] font-[700]">
              <MyTypewriter />
            </span>
          </span>
          <div className="md:flex gap-[20px] md:my-5   lg:mt-[10px] md:justify-center lg:justify-start   ">
            <button className="btn-normal">Apply For Funding</button>
            
          </div>
        </div>

        <div className=" h-[60vh]  lg:h-full w-full md:w-8/12 lg:w-full md:mx-auto md:mt-5 lg:mt-0 md:col-span-2 lg:col-span-1">
          <div className="h-full w-full relative ">
            <Image
              src="/images/big-hero.gif"
              alt="fig creators gif image"
              fill
              className="object-cover  lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
