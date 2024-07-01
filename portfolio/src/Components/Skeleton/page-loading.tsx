"use client";

import { montserratBold, montserratRegular } from "@/lib/Fonts";
import bitbucked from "/public/icons/icon-bitbucked.png";
import devilbox from "/public/icons/icon-devilbox.png";
import laravel from "/public/icons/icon-laravel.png";
import nextjs from "/public/icons/icon-nextjs.png";
import trello from "/public/icons/icon-trello.png";
import mysql from "/public/icons/icon-mysql.png";
import react from "/public/icons/icon-react.png";
import git from "/public/icons/icon-git.png";
import js from "/public/icons/icon-js.png";
import { motion } from "framer-motion";
import Image from "next/image";

const PageSkeleton = () => {
  return (
    <motion.main
      className="h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3, ease: "easeInOut" }}
    >
      <motion.div
        animate={{
          rotate: [0, 15, -15, 0],
        }}
        transition={{ ease: "linear", duration: 2 }}
        className=" absolute left-[20.3%] top-[30%]"
      >
        <Image src={devilbox} alt="devilbox icon" width={90} height={90} />
      </motion.div>
      <Image
        src={bitbucked}
        alt="bitbucked icon"
        width={50}
        height={50}
        className="absolute right-[37%] bottom-[26%]"
      />
      <Image
        src={laravel}
        alt="laravel icon"
        width={90}
        height={90}
        className="absolute right-[15%] top-[15%]"
      />
      <Image
        src={trello}
        alt="trello icon"
        width={50}
        height={50}
        className="absolute left-[50%] top-[10%]"
      />
      <Image
        src={mysql}
        alt="mysql icon"
        width={75}
        height={75}
        className=" absolute  left-[20%] bottom-[15%]"
      />
      <Image
        src={git}
        alt="git icon"
        width={50}
        height={50}
        className=" absolute right-[15%] bottom-[25%]"
      />
      <Image
        src={nextjs}
        alt="git icon"
        width={250}
        height={250}
        className=" absolute right-[24%] top-[29%] rotate-[35deg]"
      />
      <Image
        src={js}
        alt="git icon"
        width={70}
        height={70}
        className=" absolute left-[10%] top-[10%]"
      />
      <section>
        <h1
          className={`text-9xl ${montserratBold.className} w-fit absolute top-[35%] left-[20%] neon `}
        >
          ALEKSANDER
        </h1>
        <p
          className={`absolute text-5xl top-[49%] left-[60%] ${montserratRegular.className}`}
        >
          WEB DEVEL
          <span className="mx-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                ease: "linear",
              }}
              className="absolute left-[65.5%] top-[0%]"
            >
              <Image src={react} alt="react icon" width={50} height={50} />
            </motion.div>
          </span>
          PER
        </p>
      </section>
    </motion.main>
  );
};

export default PageSkeleton;
