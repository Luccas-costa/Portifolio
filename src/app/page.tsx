import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Languages from "@/components/Languages";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className='h-screen w-screen bg-white dark:bg-neutral-950'>
      <NavBar />
      <Hero />
      <Languages />
      <Projects />
    </main>
  );
}
