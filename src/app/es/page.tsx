import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Languages from "@/components/Languages";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contato from "@/components/Contato";
import Questions from "@/components/Questions";
import Footer from "@/components/Footer";

export default function HomeEs() {
  return (
    <main className='h-screen w-screen bg-white dark:bg-neutral-950'>
      <div style={{ zIndex: 2, position: "relative" }}>
        <NavBar LanguageType='es' />
      </div>
      <div style={{ zIndex: 1, position: "relative" }}>
        <Hero LanguageType='es' />
      </div>
      <Languages LanguageType='es' />
      <Projects LanguageType='es' />
      <About LanguageType='es' />
      <Questions LanguageType='es' />
      <Contato LanguageType='es' />
      <Footer />
    </main>
  );
}
