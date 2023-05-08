import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects"
import Contact from "@/components/Contact";

export default function Home() {
   return (
      <main className={`bg-light flex flex-col snap-y`}>
         <section id="hero" className="py-10 lg:py-20 xl:py-32 px-10 md:px-24 lg:px-32">
            <Hero />
         </section>
         <section id="about" className="h-auto mt-4 lg:px-32 md:px-24 px-10">
            <About />
         </section>
         <section id="projects" className="">
            <Projects />
         </section>
         <section id="contact" className="mt-32">
            <Contact />
         </section>
      </main>
   );
}
