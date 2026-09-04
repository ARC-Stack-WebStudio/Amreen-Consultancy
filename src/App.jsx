import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CountryPage from "./pages/CountryPage";

const pages = {
  home: Home,
  about: About,
  jobs: Jobs,
  services: ServicesPage,
  employers: ServicesPage,
  candidates: Jobs,
  contact: Contact,
  "country-oman": CountryPage,
  "country-saudi-arabia": CountryPage,
};

export default function App() {
  const [page, setPage] = useState("home");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);
  const Page = pages[page];
  return (
    <>
      <Header page={page} navigate={setPage} />
      <main>
        <Page page={page} navigate={setPage} />
      </main>
      <Footer navigate={setPage} />
      <ScrollToTop />
    </>
  );
}
