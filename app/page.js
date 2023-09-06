import "./page.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
  );
}
