import { ArrowRight, BarChart3, BriefcaseBusiness, Globe2, Send, UsersRound } from 'lucide-react';
import aboutVisual from '../assets/about/about-global-visual.png';

const points = [
  ['01', 'Global Perspective', 'Connecting professionals with international opportunities.', Globe2],
  ['02', 'Professional Guidance', 'Supporting candidates throughout their recruitment journey.', BriefcaseBusiness],
  ['03', 'People-First Recruitment', 'Focused on meaningful connections between talent and opportunity.', UsersRound],
];

export default function About({ navigate }) {
  return <main>
    <section className="about-page" aria-labelledby="about-page-heading">
      <div className="about-page-visual" aria-hidden="true"><img src={aboutVisual} alt="" /></div>
      <div className="container about-page-content">
        <div className="about-page-copy">
          <p className="about-page-eyebrow">ABOUT AMREEN <span aria-hidden="true" /></p>
          <h1 id="about-page-heading">Connecting Talent With<br /><em>Global Opportunities</em></h1>
          <p>AMREEN CONSULTANCY is focused on connecting talented professionals with meaningful career opportunities across international markets. We help candidates move toward better career possibilities while supporting organizations in finding the right talent.</p>
          <p>With a commitment to professionalism, transparency, and long-term relationships, we aim to make the recruitment journey clear, reliable, and opportunity-focused.</p>
          <div className="about-page-points">
            {points.map(([number, title, text, Icon]) => <article className="about-page-point" key={number}>
              <span>{number}</span><Icon aria-hidden="true" /><h2>{title}</h2><p>{text}</p>
            </article>)}
          </div>
          <div className="about-page-actions">
            <button className="btn btn-primary" onClick={() => navigate('contact')}><Send /> Discover AMREEN <ArrowRight /></button>
            <button className="btn about-page-secondary" onClick={() => navigate('jobs')}><UsersRound /> Explore Opportunities</button>
          </div>
          <p className="about-page-tagline">PEOPLE <span>|</span> OPPORTUNITIES <span>|</span> A BRIGHTER TOMORROW</p>
        </div>
      </div>
      <aside className="about-page-side-notes" aria-label="Amreen Consultancy values">
        <p className="about-page-script">Your Global<br />Career Partner</p>
        <div><UsersRound /><span>GLOBAL<br />TALENT</span></div>
        <div><BriefcaseBusiness /><span>CAREER<br />PATHWAYS</span></div>
        <div><BarChart3 /><span>BRIGHTER<br />FUTURES</span></div>
        <p className="about-page-quote">“ Opportunities<br />Beyond Borders</p>
      </aside>
    </section>
  </main>;
}
