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
  {
    title: 'Petroleum Engineers & Project Engineers',
    text: 'Engineers who support oil and gas projects through planning, technical work, and project execution.',
    icon: Ruler,
  },
  {
    title: 'Pipeline Supervisors & Construction Supervisors',
    text: 'Experienced supervisors who manage site teams and help keep pipeline and construction work on track.',
    icon: ClipboardCheck,
  },
  {
    title: 'Pipe Fitters, Fabricators & Structural Fitters',
    text: 'Skilled workers for pipe fitting, fabrication, structural assembly, and installation work.',
    icon: Hammer,
  },
  {
    title: '6G Welders, TIG Welders & Arc Welders',
    text: 'Qualified welders experienced in different welding methods used in oil and gas and industrial projects.',
    icon: Flame,
  },
  {
    title: 'Mechanical, Electrical & Instrumentation Technicians',
    text: 'Technical professionals who install, maintain, and support mechanical, electrical, and instrumentation systems.',
    icon: Cable,
  },
  {
    title: 'Plant Operators, Safety Officers & QA/QC Inspectors',
    text: 'Professionals who support plant operations, workplace safety, quality checks, and project standards.',
    icon: Settings2,
  },
];

export default function OilGas({ navigate }) {
  return (
    <div className="construction-page">
      <section className="construction-hero">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">
                Oil & Gas Industry Recruitment
              </p>

              <h1>
                Oil & Gas <em>Workforce</em> Solutions
              </h1>

              <p className="construction-hero-copy">
                AMREEN CONSULTANCY helps oil and gas companies, refineries,
                EPC contractors, and energy projects find skilled and experienced
                professionals for their workforce needs.
              </p>

              <button
                className="btn btn-primary"
                onClick={() => navigate('contact')}
              >
                Request Manpower <ArrowRight />
              </button>
            </div>

            <div className="col-12 col-lg-6">
              <div
                className="construction-hero-placeholder"
                role="img"
                aria-label="Oil and gas industry workforce image placeholder"
              >
                <div className="construction-placeholder-grid" />

                <HardHat aria-hidden="true" />

                <span>Oil & Gas Industry Workforce</span>
                <small>Skilled manpower for energy projects</small>
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
                <img
                  src={workforceHero}
                  alt="Oil and gas professional working at an energy project"
                />

                <div className="construction-image-note">
                  <Truck aria-hidden="true" /> Energy Workforce Support
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">
                Oil & Gas Recruitment
              </p>

              <h2>
                Skilled people for demanding oil and gas projects.
              </h2>

              <p>
                AMREEN CONSULTANCY helps oil and gas companies, refineries,
                EPC contractors, and energy businesses find experienced
                professionals for their workforce requirements.
              </p>

              <p>
                We provide engineers, supervisors, technicians, plant operators,
                welders, pipe fitters, mechanical workers, and other skilled
                professionals for onshore, offshore, and energy projects in
                India and overseas.
              </p>

              <div className="construction-intro-points">
                <span>
                  <UsersRound aria-hidden="true" /> Skilled & screened professionals
                </span>

                <span>
                  <MoveUpRight aria-hidden="true" /> Recruitment & deployment support
                </span>
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
