import Client from "./components/Client";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Review from "./components/Review";
import Service from "./components/Service";
import Product from "./components/Product";

export default function App() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Service />
      <Client />
      <Review />
      <Footer />
    </main>
  );
}
