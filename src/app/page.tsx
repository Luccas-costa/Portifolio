import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <main className="h-screen w-screen bg-white dark:bg-neutral-950">
      <NavBar />
      <Hero />
    </main>
  );
}
