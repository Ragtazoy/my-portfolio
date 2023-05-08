import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Skill = ({ title, src, link }) => {
  return (
    <Link href={link || ""} target="_black" className="">
      <div className="group relative sm:h-auto h-24 rounded-full shadow-md bg-white">
        <Image
        priority
          src={src}
          width={80}
          height={80}
          className={
            "rounded-full border border-dark/10 object-scale-down mx-auto h-full sm:w-28 sm:h-28 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
          }
        />
        <div className="absolute sm:top-0 top-1/3 sm:right-0 right-5 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-dark/70 w-25 h-25 sm:w-28 sm:h-28 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl text-light text-center font-medium opacity-100">
              {title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Skill;
