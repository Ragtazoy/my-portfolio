import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <div className="inline-flex flex-col">
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span
          className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
         ${router.asPath === href ? "w-full" : "w-0"}`}
        >
          &nbsp;
        </span>
      </Link>
    </div>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  console.log(router.asPath, href, router.asPath === href);

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <div className="inline-flex flex-col">
      <button
        href={href}
        onClick={handleClick}
        className={`${className} relative group`}
      >
        {title}
        <span
          className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
         ${router.asPath === href ? "w-full" : "w-0"}`}
        >
          &nbsp;
        </span>
      </button>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      onClick={() => setIsOpen(!isOpen)}
      className="sticky top-0 z-20 w-full lg:px-32 md:px-24 px-10 text-dark font-medium flex items-center justify-end md:justify-center"
    >
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="bg-white w-14 h-14 rounded-full shadow-lg mt-4 flex-col justify-center items-center flex md:hidden"
      >
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-8 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        />
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-8 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-8 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        />
      </motion.button>

      <motion.div
        initial={{ opacity: 1, y: -50 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="bg-white px-16 pt-4 pb-6 rounded-b-3xl shadow-lg items-center justify-center hidden md:flex relative"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute -bottom-1.5 px-10 py-1.5 bg-dark rounded-full shadow-lg"
        >
          <span
            className={
              "bg-white block transition-all duration-300 ease-out h-0.5 w-10 rounded-full"
            }
          />
        </motion.div>
        <nav className="space-x-8">
          <CustomLink href={"/"} title={"Home"} className="" />
          <CustomLink href={"/#about"} title={"About"} className="" />
          <CustomLink href={"/#projects"} title={"Projects"} className="" />
          <CustomLink href={"/#contact"} title={"Contact"} className="" />
        </nav>
      </motion.div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] bg-light/75 shadow-lg rounded-lg backdrop-blur-md py-32 flex flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden"
        >
          <nav className="flex flex-col items-center justify-center space-y-4">
            <CustomMobileLink
              href={"/"}
              title={"Home"}
              className=""
              toggle={() => setIsOpen(!isOpen)}
            />
            <CustomMobileLink
              href={"/#about"}
              title={"About"}
              className=""
              toggle={() => setIsOpen(!isOpen)}
            />
            <CustomMobileLink
              href={"/#projects"}
              title={"Projects"}
              className=""
              toggle={() => setIsOpen(!isOpen)}
            />
            <CustomMobileLink
              href={"/#contact"}
              title={"Contact"}
              className=""
              toggle={() => setIsOpen(!isOpen)}
            />
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;
