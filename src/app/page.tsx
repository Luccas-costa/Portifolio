import About from "@/components/About";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Questions from "@/components/Questions";
import Languages from "@/components/Languages";

export default function Home() {
  return (
    <main className='h-screen w-screen '>
      <div>
        <div style={{ zIndex: 2, position: "relative" }}>
          <NavBar LanguageType='pt' />
        </div>
        <div style={{ zIndex: 1, position: "relative" }}>
          <Hero LanguageType='pt' />
        </div>
        <Languages LanguageType='pt' />
        <Projects LanguageType='pt' />
        <About LanguageType='pt' />
        <Questions LanguageType='pt' />
        <Contato LanguageType='pt' />
        <Footer />
      </div>
    </main>
  );
}
