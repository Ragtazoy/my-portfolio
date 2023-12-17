import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Skill from "./Skill";
import antDesign from "../../public/images/skill/ant-design.png";
import awsAmplify from "../../public/images/skill/aws-amplify.png";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const scaleY = useSpring(scrollYProgress);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="w-full inline-block z-0"
    >
      <div
        ref={ref}
        className=" flex justify-center items-center mt-16 mb-10 relative"
      >
        <h1 className="bg-light font-bold text-dark text-3xl md:text-5xl lg:md:text-6xl text-center px-4 z-10">
          About Me
        </h1>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-4 w-full h-[4px] rounded-md bg-dark origin-top"
        />
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-1 relative">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-dark flex flex-col items-start justify-start p-12"
        >
          <h2 className="text-2xl font-bold mb-2">Personal Profile</h2>
          <div className="pl-8 relative">
            <motion.div
              style={{ scaleY: scaleY }}
              className="absolute left-1 top-0 w-[2px] h-full rounded-sm bg-dark origin-top"
            />
            <div className="font-medium indent-10 space-y-4">
              <p className="text-justify">
                I am a Computer Science graduate who is always eager to coding
                and my enthusiasm for learning new technologies and
                problem-solving. I am always eager to expand my knowledge and
                take on new challenges.
              </p>
              <p className="text-justify">
                My expertise lies in optimizing code for maximum efficiency,
                both on the frontend and backend of applications. I have honed
                my skills in programming languages such as Python, Java, and
                Typescript, and I have experience working with frameworks like
                React, Flutter and Node.js. I am confident in my ability to
                develop software solutions that meet the needs of users.
              </p>
              <p className="text-justify">
                Currently, I am seeking opportunities to apply my skills and
                gain valuable experience while enhancing my abilities. I am
                excited to collaborate with a team of passionate individuals who
                share my dedication to building innovative software solutions
                with maximum efficiency, cutting-edge technology, and
                user-centered design principles.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-5 mb-2">Education</h2>
          <div className="pl-8 relative">
            <motion.div
              style={{ scaleY: scaleY }}
              className="absolute left-1 top-0 w-[2px] h-full rounded-sm bg-dark origin-top"
            />
            <span className="flex justify-between">
              <h3 className="font-bold text-lg">
                Computer Science{" "}
                <a
                  href="https://www.rmutt.ac.th"
                  target="_blank"
                  className="text-primaryDark"
                >
                  @RMUTT
                </a>
              </h3>
              <span className="font-medium text-dark/75">2019 - 2023</span>
            </span>
            <div className="font-medium w-full">
              <p>GPAX: 3.69</p>
              <p>
                My activities{" "}
                <a
                  href="https://activity.rmutt.ac.th/profile.php?id=5d7daa37737c933e4c00e1e8"
                  target="_blank"
                  className="underline"
                >
                  click
                </a>
              </p>
              <p>
                Worked as Sports Committee and Art and Culture Committee member
                of the Faculty of Science and Technology Student Club
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-5 mb-2">Experience</h2>
          <div className="pl-8 relative">
            <motion.div
              style={{ scaleY: scaleY }}
              className="absolute left-1 top-0 w-[2px] h-full rounded-sm bg-dark origin-top"
            />
            <div className="mb-4">
              <span className="flex justify-between">
                <h3 className="font-bold text-lg">
                  Chatbot Developer{" "}
                  <a
                    href="https://www.amitysolutions.com/"
                    target="_blank"
                    className="text-primaryDark"
                  >
                    @Amity Solutions
                  </a>
                </h3>
                <span className="font-medium text-dark/75">
                  June 2023 - Dec 203
                </span>
              </span>
              <ul class="list-disc font-medium text-justify ml-6">
                <li>
                  Collaborate with project managers and developers to develop a
                  web application for the Royal Thai Police to manage internal
                  organizational data. Includes features such as task
                  management, handling petition data, and presenting a dashboard
                  of reports.
                </li>
                <li>
                  Responsible for developing a chat web application for the ONE
                  Krungthai platform, the development will be executed using
                  Next.js, with integration facilitated through the Amity SDK,
                  and deployed the application on AWS Amplify. The primary
                  objective is to enhance the application&apos;s functionality by
                  introducing a robust and user-friendly chat feature to improve
                  internal communication.
                </li>
              </ul>
            </div>

            <div>
              <span className="flex justify-between">
                <h3 className="font-bold text-lg">
                  Software Developer Trainee{" "}
                  <a
                    href="https://www.softsquaregroup.com"
                    target="_blank"
                    className="text-primaryDark"
                  >
                    @Soft Square
                  </a>
                </h3>
                <span className="font-medium text-dark/75">2022</span>
              </span>
              <ul class="list-disc font-medium text-justify ml-6">
                <li>
                  As a member of an Oracle team, I had the opportunity to
                  contribute to the development of an electronic document system
                  that enabled users to create and sign quotations and download
                  excel reports within the organization. I was responsible for
                  utilizing in Oracle Application Express (APEX) and PL/SQL,
                  along with some CSS and JavaScript to develop the system
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-dark flex flex-col xl:items-start sm:items-center justify-start p-12"
        >
          <h2 className="text-2xl font-bold mb-5">Skills</h2>
          <div className="grid gap-6 xl:grid-cols-5 md:grid-cols-5 sm:grid-cols-2">
            <Skill
              title={"React.js"}
              link={"https://react.dev"}
              src={"https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"}
            />
            <Skill
              title={"React Native"}
              link={"https://reactnative.dev"}
              src={
                "https://upload.vectorlogo.zone/logos/reactnativedev/images/199b2976-954e-4e42-8d79-12a784e2cdf9.svg"
              }
            />
            <Skill
              title={"Flutter"}
              link={"https://flutter.dev/"}
              src={
                "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
              }
            />
            <Skill
              title={"Node.js"}
              link={"https://nodejs.org/"}
              src={"https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"}
            />
            <Skill
              title={"Express.js"}
              link={"https://expressjs.com/"}
              src={
                "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
              }
            />
            <Skill
              title={"Git"}
              link={"https://git-scm.com/"}
              src={"https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"}
            />
            <Skill
              title={"MySQL"}
              link={"https://www.mysql.com/"}
              src={"https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg"}
            />
            <Skill
              title={"Figma"}
              link={"https://www.figma.com/"}
              src={"https://www.vectorlogo.zone/logos/figma/figma-icon.svg"}
            />
            <Skill
              title={"Framer"}
              link={"https://www.framer.com/"}
              src={"https://www.vectorlogo.zone/logos/framer/framer-icon.svg"}
            />
            <Skill
              title={"Tailwind CSS"}
              link={"https://tailwindcss.com/"}
              src={
                "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              }
            />
            <Skill
              title={"Ant Design"}
              link={"https://ant.design/"}
              src={antDesign}
            />
            <Skill
              title={"Bootstrap"}
              link={"https://getbootstrap.com/"}
              src={
                "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg"
              }
            />
            <Skill
              title={"AWS Amplify"}
              link={"https://aws.amazon.com/th/amplify/"}
              src={awsAmplify}
            />
            <Skill
              title={"Firebase"}
              link={"https://firebase.google.com/"}
              src={
                "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              }
            />
            <Skill
              title={"Postman"}
              link={"https://www.postman.com/product/what-is-postman/"}
              src={
                "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              }
            />
            <Skill
              title={"Strapi"}
              link={"https://strapi.io/"}
              src={"https://www.svgrepo.com/show/354398/strapi.svg"}
            />
            <Skill
              title={"Stripe"}
              link={"https://stripe.com/th"}
              src={"https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg"}
            />
            <Skill
              title={"Oracle Apex"}
              link={"https://apex.oracle.com/"}
              src={"https://cdn.worldvectorlogo.com/logos/oracle-6.svg"}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
