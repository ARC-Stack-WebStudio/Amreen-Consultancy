import { Check, ArrowRight } from 'lucide-react';
import CountryHero from '../components/CountryHero';
import CountrySectors from '../components/CountrySectors';
import { getCountryByPageId } from '../data/countries';

export default function CountryPage({ page, navigate }) {
  const country = getCountryByPageId(page);

  if (!country) {
    return (
      <section className="section">
        <div className="container">
          <h2>Country not available</h2>
          <p>This market is currently being prepared.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <CountryHero country={country} />

      <section className="section country-content">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="country-visual">
                <img src={country.image} alt={country.imageAlt} />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <p className="eyebrow">Recruitment & manpower support</p>
              <h2>{country.contentHeading}</h2>
              <p>{country.summary}</p>

              <ul className="check-list country-check-list">
                {country.bullets.map((service) => (
                  <li key={service}>
                    <Check aria-hidden="true" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <button type="button" className="btn btn-primary" onClick={() => navigate('contact')}>
                Speak with AMREEN <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <CountrySectors country={country} />
    </>
  );
}
