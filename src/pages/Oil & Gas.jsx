import {
  ArrowRight,
  BrickWall,
  Cable,
  ClipboardCheck,
  HardHat,
  Hammer,
  MoveUpRight,
  Ruler,
  Settings2,
  Truck,
  UsersRound,
  Wrench,
} from 'lucide-react';
import workforceHero from '../assets/workforce/workforce-hero.png';
import SectionTitle from '../components/SectionTitle';

const categories = [
  { title: 'Project Leadership', text: 'Project managers and construction supervisors who keep work coordinated on site.', icon: ClipboardCheck },
  { title: 'Engineering Teams', text: 'Civil and site engineers for planning, execution and quality control.', icon: Ruler },
  { title: 'Skilled Trades', text: 'Masons, carpenters, steel fixers and welders for essential build work.', icon: Hammer },
  { title: 'MEP Specialists', text: 'Electricians and plumbers for dependable mechanical, electrical and plumbing work.', icon: Cable },
  { title: 'Plant Operators', text: 'Qualified equipment operators for productive, safety-focused project sites.', icon: Settings2 },
  { title: 'Site Workforce', text: 'Reliable general construction workers ready to support daily operations.', icon: HardHat },
];

export default function OilGas ({ navigate }) {
  return (
    <div className="construction-page">
      <section className="construction-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">Oil & Gas Industry expertise</p>
              <h1>Construction <em>Workforce</em> Solutions</h1>
              <p className="construction-hero-copy">
                Build capable project teams with screened, experienced construction professionals and skilled trades sourced for overseas opportunities.
              </p>
              <button className="btn btn-primary" onClick={() => navigate('contact')}>
                Request Manpower <ArrowRight />
              </button>
            </div>
            <div className="col-12 col-lg-6">
              <div className="construction-hero-placeholder" role="img" aria-label="Construction industry image placeholder">
                <div className="construction-placeholder-grid" />
                <HardHat aria-hidden="true" />
                <span>Construction industry visual</span>
                <small>Image coming soon</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section construction-intro">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="construction-intro-visual">
                <img src={workforceHero} alt="Construction professional at an international project site" />
                <div className="construction-image-note"><Truck aria-hidden="true" /> Global project readiness</div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">Construction recruitment</p>
              <h2>People who help projects move from plan to progress.</h2>
              <p>
                AMREEN CONSULTANCY supports construction employers with dependable manpower sourcing for projects of every scale. We understand that the right workforce affects safety, programme delivery and day-to-day productivity.
              </p>
              <p>
                From experienced engineers and supervisors to certified trades and site support teams, we source candidates matched to your technical requirements and deployment timelines.
              </p>
              <div className="construction-intro-points">
                <span><UsersRound aria-hidden="true" /> Screened, job-ready candidates</span>
                <span><MoveUpRight aria-hidden="true" /> Overseas deployment support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section surface construction-categories">
        <div className="container">
          <SectionTitle
            eyebrow="Workforce categories"
            title="Construction talent, matched to your site needs."
            text="A focused workforce mix for employers seeking reliable technical, trade and on-site support."
          />
          <div className="row g-3">
            {categories.map(({ title, text, icon: Icon }) => (
              <div className="col-12 col-md-6 col-lg-4" key={title}>
                <article className="construction-category-card">
                  <div className="construction-category-icon"><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <BrickWall aria-hidden="true" className="construction-card-mark" />
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="construction-cta">
        <div className="container">
          <div>
            <p className="construction-eyebrow">Build your team</p>
            <h2>Looking for the right construction workforce?</h2>
            <p>Tell us what your project needs. We will help you source a dependable workforce ready for overseas deployment.</p>
          </div>
          <button className="btn btn-primary" onClick={() => navigate('contact')}>
            Request Manpower <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}
