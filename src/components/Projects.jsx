import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FsLightbox from "fslightbox-react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";

import eawp1 from "../../public/images/project/eawp1.png";
import eawp2 from "../../public/images/project/eawp2.png";
import eawp3 from "../../public/images/project/eawp3.png";
import eawp4 from "../../public/images/project/eawp4.png";
import eawp5 from "../../public/images/project/eawp5.png";
import eawp6 from "../../public/images/project/eawp6.png";
import eawp7 from "../../public/images/project/eawp7.png";
import eawp8 from "../../public/images/project/eawp8.png";
import eawp9 from "../../public/images/project/eawp9.png";

import wola from "../../public/images/project/wola.png";
import wola1 from "../../public/images/project/wola1.png";
import wola2 from "../../public/images/project/wola2.png";
import wola3 from "../../public/images/project/wola3.png";
import wola4 from "../../public/images/project/wola4.png";
import wola5 from "../../public/images/project/wola5.png";
import wola6 from "../../public/images/project/wola6.png";

import edoc1 from "../../public/images/project/edoc1.png";

import fitcal from "../../public/images/project/fitcal.png";
import fitcal1 from "../../public/images/project/fitcal1.png";
import fitcal2 from "../../public/images/project/fitcal2.png";
import fitcal3 from "../../public/images/project/fitcal3.png";
import fitcal4 from "../../public/images/project/fitcal4.png";
import fitcal5 from "../../public/images/project/fitcal5.png";

const Projects = () => {
  const [toggler, setToggler] = useState(false);
  const [imgPreview, setImgPreview] = useState([]);

  const FeaturedProject = ({
    type,
    title,
    summary,
    img,
    link,
    github,
    tech,
  }) => (
    <article className="bg-white text-dark w-full flex flex-col xl:flex-row items-center justify-between rounded-3xl shadow-xl p-8 my-8">
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }}>
        <div
          onClick={async () => {
            await setImgPreview(img);
            await setToggler(!toggler);
          }}
          className="overflow-hidden flex cursor-pointer group relative"
        >
          <Image
            priority
            src={img[0]}
            width={1000}
            height={1000}
            alt={title}
            className="w-full h-52 md:h-72 xl:h-auto rounded-3xl"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-dark/70 w-full h-full rounded-3xl z-0">
            <div className="flex items-center justify-center h-full">
              <AiOutlineEye size={30} color="white" />
              <p className="ml-1 text-2xl text-light text-center font-medium opacity-100">
                Preview
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="w-full h-auto lg:h-96 flex flex-col items-start justify-between pl-6">
        <span className="text-primaryDark font-medium text-xl mt-4">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        <p className="my-2 font-medium text-dark text-justify">{summary}</p>
        <div className="inline-flex flex-wrap items-center">
          {tech
            ? tech.map((item, index) => (
                <span
                  key={index}
                  className="rounded-md bg-gray-50 px-2 py-1 mr-2 mb-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                >
                  {item}
                </span>
              ))
            : null}
        </div>
        <div className="flex items-center">
          {github ? (
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Link href={github} target="_blank">
                <AiFillGithub size={40} className="mr-4" />
              </Link>
            </motion.div>
          ) : null}
          {link ? (
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Link
                href={link}
                target="_blank"
                className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
              >
                Visit
              </Link>
            </motion.div>
          ) : null}
        </div>
      </div>
    </article>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="w-full inline-block z-0 "
    >
      <div className=" flex justify-center items-center mt-16 mb-10 mx-32 relative">
        <h1 className="bg-light font-bold text-dark text-3xl md:text-5xl lg:md:text-6xl text-center px-4 z-10">
          Projects
        </h1>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-4 w-full h-[4px] rounded-md bg-dark origin-top"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.6}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          <SwiperSlide>
            <FeaturedProject
              img={[
                eawp1.src,
                eawp2.src,
                eawp3.src,
                eawp4.src,
                eawp5.src,
                eawp6.src,
                eawp7.src,
                eawp8.src,
                eawp9.src,
              ]}
              title={"Application to Manage Employee"}
              summary={
                "For my final project, I developed a mobile application to address internal issues at Yangnoey Khong 6 Restaurant. The app streamlines employee management tasks, including attendance tracking, leave requests, work exchanges, performance evaluations, work history reporting, and daily wage payments. To build the app, I used React Native for the frontend and Node.js with Express.js to create the API server and query data from a MySQL database. I also implemented scheduled tasks using Node-cron and notifications using Firebase Cloud Messaging."
              }
              link={""}
              github={"https://github.com/Ragtazoy/EAWP"}
              type={"Mobile Application"}
              tech={[
                "React Native",
                "Node.js",
                "Express.js",
                "SQL",
                "Firebase",
              ]}
            />
          </SwiperSlide>

          <SwiperSlide>
            <FeaturedProject
              img={[
                wola.src,
                wola1.src,
                wola2.src,
                wola3.src,
                wola4.src,
                wola5.src,
                wola6.src,
              ]}
              title={"WOLA Store"}
              summary={
                "I practiced developing a simple and complete fruit store website called Wola that enabled customer to buy and track delivery. I used React for the frontend and Strapi for backend management, while implementing Stripe for payment processing. To deploy the application, I utilized Heroku server for deploy the Strapi backend. I gained experience in building efficient e-commerce solutions, as well as improving my understanding of developing and deploying web applications."
              }
              link={"https://wola.vercel.app/"}
              github={"https://github.com/Ragtazoy/wola"}
              type={"Web Application"}
              tech={["React.js", "Redux", "CMS", "Strapi", "Stripe", "Heroku"]}
            />
          </SwiperSlide>

          <SwiperSlide>
            <FeaturedProject
              img={[edoc1.src]}
              title={"Electronic Document System"}
              summary={
                "As a member of an Oracle team, I had the opportunity to contribute to the development of an electronic document system that enabled users to create and sign quotations and download excel reports within the organization. I was responsible for utilizing in Oracle Application Express (APEX) and PL/SQL, along with some CSS and JavaScript to develop the system"
              }
              link={""}
              github={""}
              type={"Web Application"}
              tech={[
                "Oracle Apex",
                "Oracle SQL Developer",
                "PL/SQL",
                "Jasper Report",
              ]}
            />
          </SwiperSlide>

          <SwiperSlide>
            <FeaturedProject
              img={[
                fitcal.src,
                fitcal1.src,
                fitcal2.src,
                fitcal3.src,
                fitcal4.src,
                fitcal5.src,
              ]}
              title={"Fit-Cal"}
              summary={
                "I developed a health-oriented mobile application for individuals who prioritize their health, as a part of a mini-project. This app helps users calculate various values essential for maintaining good health. For the development, I utilized Flutter, while incorporating Firebase Authentication and Cloud Firestore to manage user data. Moreover, the Fitness Calculator API was integrated to perform the necessary calculations, resulting in a comprehensive and user-friendly application."
              }
              link={""}
              github={"https://github.com/Ragtazoy/fit-cal"}
              type={"Mobile Application"}
              tech={["Flutter", "Firebase", "API"]}
            />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </motion.div>

      <FsLightbox toggler={toggler} sources={imgPreview} slide={1} />
    </motion.div>
  );
};

export default Projects;
