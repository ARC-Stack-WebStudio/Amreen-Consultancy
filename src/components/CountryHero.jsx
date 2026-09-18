export default function CountryHero({ country }) {
  return (
    <section className="page-hero country-hero">
      <div className="container">
        <p className="eyebrow light">{country.heroEyebrow}</p>
        <h1>{country.heading}</h1>
        <p>{country.heroIntro}</p>
      </div>
    </section>
  );
}
