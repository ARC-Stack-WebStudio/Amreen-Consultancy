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
import Workforce from "./pages/Workforce";
import Process from "./pages/Process";
import ConstructionIndustry from "./pages/ConstructionIndustry";
import ManufacturingIndustry from "./pages/Manufacturing";
import Petrochemicals from "./pages/Petrochemicals";
import Mining from "./pages/Mining";
import OilGas from "./pages/Oil & Gas";
import Logistics from "./pages/Logistics";  
import Marine from "./pages/Marine";
import Infrastructure from "./pages/Infrastructure.jsx";
import Warehousing from "./pages/Warehousing.jsx";
import Shipbuilding from "./pages/Shipbuilding.jsx";
import FoodProcessing from "./pages/FoodProcessing.jsx";
import Hospitality from "./pages/Hospitality.jsx";

const pages = {
  home: Home,
  about: About,
  jobs: Jobs,
  services: ServicesPage,
  employers: ServicesPage,
  candidates: Jobs,
  contact: Contact,
  workforce: Workforce,
  process: Process,
  "industry-construction": ConstructionIndustry,
  "industry-manufacturing": ManufacturingIndustry,
  "industry-petrochemicals": Petrochemicals,
  "industry-mining": Mining,
  "industry-oil-gas": OilGas,
  "industry-logistics": Logistics,
  "industry-marine": Marine,
  "industry-infrastructure": Infrastructure,
  "industry-warehousing": Warehousing,
  "industry-shipbuilding": Shipbuilding,
  "industry-food-processing": FoodProcessing,
  "industry-hospitality": Hospitality,
  "country-oman": CountryPage,
  "country-saudi-arabia": CountryPage,
  "country-united-arab-emirates": CountryPage,
  "country-qatar": CountryPage,
  "country-poland": CountryPage,
  "country-kuwait": CountryPage,
  "country-mauritius": CountryPage,
  "country-russia": CountryPage,
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
