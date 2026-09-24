import omanHeroImage from '../assets/Imgs/Omanhero.png';
import saudiHeroImage from '../assets/Imgs/Saudi Arabia Hero.png';
import uaeHeroImage from '../assets/Imgs/UAE Hero.png';
import qatarHeroImage from '../assets/Imgs/Qatar Hero.png';

export default function CountryHero({ country }) {
  const isOman = country.key === 'oman';
  const isSaudiArabia = country.key === 'saudi-arabia';
  const isUnitedArabEmirates = country.key === 'uae';
  const isQatar = country.key === 'qatar';

  return (
    <section
      className={`page-hero country-hero${isOman ? ' country-hero--oman' : ''}${
        isSaudiArabia ? ' country-hero--saudi' : ''
      }${
        isUnitedArabEmirates ? ' country-hero--uae' : ''
      }${
        isQatar ? ' country-hero--qatar' : ''
      }`}
    >
      <div className="container">
        <p className="eyebrow light">{country.heroEyebrow}</p>
        <h1>{country.heading}</h1>
        <p>{country.heroIntro}</p>
      </div>

      {isOman && (
        <div className="oman-hero-visual" aria-hidden="true">
          <img src={omanHeroImage} alt="" />
        </div>
      )}

      {isSaudiArabia && (
        <div className="saudi-hero-visual" aria-hidden="true">
          <img src={saudiHeroImage} alt="" />
        </div>
      )}

      {isUnitedArabEmirates && (
        <div className="uae-hero-visual" aria-hidden="true">
          <img src={uaeHeroImage} alt="" />
        </div>
      )}

      {isQatar && (
        <div className="qatar-hero-visual" aria-hidden="true">
          <img src={qatarHeroImage} alt="" />
        </div>
      )}
    </section>
  );
}
