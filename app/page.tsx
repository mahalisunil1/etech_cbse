import Header from "./components/Header";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Academics from "./components/Academics";
import Facilities from "./components/Facilities";
import Achievers from "./components/Achievers";
import AdmissionsCTA from "./components/AdmissionsCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        <Hero />
        <Ticker />
        <About />
        <Academics />
        <Facilities />
        <Achievers />
        <AdmissionsCTA />
      </main>

      <Footer />
    </div>
  );
}