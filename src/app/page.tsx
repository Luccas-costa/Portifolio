import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Languages from "@/components/Languages";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contato from "@/components/Contato";
import Questions from "@/components/Questions";

export default function Home() {
  return (
    <main className='h-screen w-screen bg-white dark:bg-neutral-950'>
      <div style={{ zIndex: 2, position: "relative" }}>
        <NavBar />
      </div>
      <div style={{ zIndex: 1, position: "relative" }}>
        <Hero />
      </div>
      <Languages />
      <Projects />
      <About />
      <Questions />
      <Contato />
    </main>
  );
}
