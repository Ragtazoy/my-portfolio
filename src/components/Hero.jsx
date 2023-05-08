import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../../public/images/profile/ni-removebg.png";
import { HiHeart, HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { RiShareForwardFill } from "react-icons/ri";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="w-full inline-block z-0"
    >
      <div className="relative bg-white rounded-3xl text-dark grid grid-cols-2 w-full shadow-lg">
        <Image
          src={profile}
          alt="profile"
          className="overflow-hidden w-auto h-full translate-x-32 sm:translate-x-40 md:-translate-x-0 pt-48 md:pt-0"
          style={{ maxHeight: 600 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
        <div className="absolute w-full text-center top-14 md:top-1/3 md:space-y-5">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8, y: -80 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl"
          >
            Hi, my name is New
          </motion.h2>
          <span className="flex justify-center items-center font-bold text-3xl md:text-4xl lg:md:text-6xl">
            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.5,
                x: -300,
                y: 200,
                rotate: -300,
              }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Jeerayuth&nbsp;
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, scale: 0.5, x: 300, y: -200, rotate: 300 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Suwanprasert
            </motion.h1>
          </span>
          <div className="text-xl md:text-2xl">
            <motion.p
              initial={{ opacity: 0, scale: 0.8, y: 120 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              Web Developer / Mobile Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: true }}
            >
              New Graduate
            </motion.p>
          </div>
        </div>
        <div className="flex justify-end items-end p-6 z-10">
          <div className="flex flex-col space-y-2">
            <div>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full text-2xl md:text-3xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-dark/10 active:bg-dark/20 focus:text-red-500"
              >
                <HiHeart />
              </motion.button>
              <p className="text-center">10.3M</p>
            </div>
            <div>
              <button className="rounded-full text-2xl md:text-3xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-dark/10 active:bg-dark/20">
                <HiChatBubbleOvalLeftEllipsis />
              </button>
              <p className="text-center">56.7K</p>
            </div>
            <div>
              <button className="rounded-full text-2xl md:text-3xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-dark/10 active:bg-dark/20">
                <RiShareForwardFill />
              </button>
              <p className="text-center">125.3K</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
