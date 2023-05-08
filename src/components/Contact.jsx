import Link from "next/link";
import { motion } from "framer-motion";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMapOutline,
  IoMailOutline,
  IoPhonePortraitSharp,
} from "react-icons/io5";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full inline-block z-0"
    >
      <div className="bg-white shadow-lg mt-16 lg:px-32 md:px-24 px-10 pt-28 pb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-white rounded-3xl shadow-lg">
          <h1 className="font-bold text-dark text-3xl md:text-5xl lg:md:text-6xl text-center px-8 py-8">
            Get In Touch
          </h1>
        </div>
        <div className="flex justify-between items-end">
          <div className="w-full mr-10 text-left text-lg font-semibold leading-8 text-dark">
            <div className="flex justify-start items-start">
              <IoMapOutline size={20} className="mt-1" />
              <p>&nbsp;Address:&nbsp;</p>
              <span className="text-dark/80">
                12/24 Moo 7, Khu Khot, Lam Luk Ka, Pathum Thani, 12130
              </span>
            </div>

            <div className="flex justify-start items-start mt-2">
              <IoPhonePortraitSharp size={20} className="mt-1" />
              <p>&nbsp;Phone Number:&nbsp;</p>
              <span className="text-dark/80">080 641 1130</span>
            </div>
          </div>

          <div className="lg:flex justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="mx-auto w-min flex items-center rounded-lg bg-dark text-light text-xl font-semibold mr-0 lg:mr-2"
            >
              <Link
                href={"mailto:jeerayuth0943@gmail.com"}
                target="_blank"
                className="flex items-center px-4 py-2"
              >
                <IoMailOutline size={40} className="mr-2" />
                Contact
              </Link>
            </motion.div>

            <div className="flex justify-center items-center mt-1 space-x-2">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Link href={"https://github.com/Ragtazoy"} target="_blank">
                  <IoLogoGithub
                    size={50}
                    className="text-dark cursor-pointer"
                  />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Link href={"https://www.linkedin.com/in/jeerayuth-suwanprasert-391496269"} target="_blank">
                  <IoLogoLinkedin
                    size={50}
                    className="text-dark cursor-pointer"
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
