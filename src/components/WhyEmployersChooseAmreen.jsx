import { BadgeCheck, Clock3, FileText, HeartHandshake, MonitorCheck, ShieldCheck, UsersRound, Wrench } from 'lucide-react';
import EmployerCapabilityCard from './EmployerCapabilityCard';

const employerCapabilities = [
  { title: 'Large Workforce Database', description: 'Access to 100,000+ pre-screened candidates across all major industrial trades and skill levels.', icon: UsersRound, featured: true },
  { title: 'Rigorous Screening', description: 'Multi-stage verification including comprehensive background checks, skill validation, and thorough reference verification.', icon: BadgeCheck },
  { title: 'Trade Testing Facilities', description: 'Multiple dedicated facilities for hands-on assessment of welding, fitting, electrical and mechanical skills.', icon: Wrench },
  { title: 'Fast Mobilisation', description: 'From requirement to deployment in weeks, not months. Scalable from 50 to 5,000 workers.', icon: Clock3 },
  { title: 'Documentation Support', description: 'Complete visa, work permit, attestation and compliance documentation handled end-to-end.', icon: FileText },
  { title: 'Compliance Experience', description: 'Deep knowledge of international labour laws, migration rules and industry-specific regulations.', icon: ShieldCheck },
  { title: 'Retention Focus', description: 'Post-deployment support and worker welfare programs that drive long-term workforce stability.', icon: HeartHandshake },
  { title: 'End-to-End Management', description: 'Single point of accountability from sourcing through deployment and beyond.', icon: MonitorCheck },
];

export default function WhyEmployersChooseAmreen() {
  return (
    <section className="employer-capabilities" id="why-amreen" aria-labelledby="why-amreen-heading">
      <div className="container">
        <header className="employer-capabilities-heading text-center mx-auto">
          <p className="section-eyebrow">Why Employers Choose AMREEN</p>
          <span className="gold-divider mx-auto" aria-hidden="true" />
          <h2 id="why-amreen-heading">Trusted by <span className="gold-text">Industrial Employers Worldwide</span></h2>
          <p>We do not just recruit — we mobilise workforce at scale with rigorous standards and end-to-end management.</p>
        </header>
        <div className="row g-4">
          {employerCapabilities.map(({ icon: Icon, ...capability }) => (
            <div className="col-12 col-md-6 col-lg-3" key={capability.title}>
              <EmployerCapabilityCard {...capability} Icon={Icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
