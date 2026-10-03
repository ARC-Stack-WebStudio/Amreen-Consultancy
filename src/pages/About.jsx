import { useEffect, useRef } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Check,
  Compass,
  Globe2,
  Handshake,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import "../styles/about.css";

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "Honest, transparent and responsible recruitment practices.",
  },
  {
    icon: Briefcase,
    title: "Professionalism",
    text: "High standards and care throughout every interaction.",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    text: "A focus on suitable candidates and dependable workforce solutions.",
  },
  {
    icon: Target,
    title: "Commitment",
    text: "Staying focused on the requirements of clients and candidates.",
  },
  {
    icon: Check,
    title: "Compliance",
    text: "Respect for applicable recruitment and employment requirements.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    text: "Long-term relationships with employers, candidates and stakeholders.",
  },
];

const reasonsToChoose = [
  {
    icon: Users,
    title: "Candidate-focused guidance",
    text: "Thoughtful support that keeps each candidate’s goals and experience in view.",
  },
  {
    icon: Target,
    title: "Employer requirements",
    text: "Taking time to understand the role, workplace and workforce needs.",
  },
  {
    icon: Globe2,
    title: "International recruitment",
    text: "Support for recruitment needs that connect people and organisations across markets.",
  },
  {
    icon: MessageCircle,
    title: "Transparent communication",
    text: "Clear conversations and considered coordination throughout the process.",
  },
  {
    icon: Compass,
    title: "Industry-focused approach",
    text: "Recruitment support shaped around the requirements of each sector and role.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term relationships",
    text: "A relationship-led approach with care for both sides of every connection.",
  },
];

export default function About({ navigate }) {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!page || prefersReducedMotion || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const items = page.querySelectorAll("[data-about-reveal]");
    if (!items.length) return undefined;

    page.classList.add("about-motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px 0px" }
    );

    items.forEach((item, index) => {
      item.style.setProperty("--about-delay", `${(index % 3) * 80}ms`);
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
      page.classList.remove("about-motion-ready");
      items.forEach((item) => item.classList.remove("is-visible"));
    };
  }, []);

  return (
    <div className="about-page" ref={pageRef}>
      <section className="about-hero" aria-labelledby="about-page-title">
        <div className="about-shell about-hero__layout">
          <div className="about-hero__copy" data-about-reveal>
            <p className="about-eyebrow about-eyebrow--light">
              About AMREEN CONSULTANCY
            </p>
            <h1 id="about-page-title">
              Connecting People.
              <span>Building Global Opportunities.</span>
            </h1>
            <p className="about-hero__intro">
              AMREEN CONSULTANCY connects skilled professionals with meaningful
              international opportunities while helping employers build
              reliable and capable workforces.
            </p>
            <a className="about-text-link" href="#about-who-we-are">
              Discover our approach <ArrowRight aria-hidden="true" />
            </a>
          </div>

          <div
            className="about-hero__art"
            aria-hidden="true"
            data-about-reveal
          >
            <div className="about-art__grid" />
            <div className="about-art__orbit about-art__orbit--outer" />
            <div className="about-art__orbit about-art__orbit--inner" />
            <div className="about-art__globe">
              <span className="about-art__longitude" />
              <span className="about-art__latitude" />
              <Globe2 strokeWidth={1.15} />
            </div>
            <span className="about-art__node about-art__node--one" />
            <span className="about-art__node about-art__node--two" />
            <span className="about-art__node about-art__node--three" />
            <div className="about-art__route about-art__route--one" />
            <div className="about-art__route about-art__route--two" />
            <div className="about-art__card about-art__card--candidate">
              <span>FOR CANDIDATES</span>
              <strong>Skills meet opportunity</strong>
              <small>Guidance at every step</small>
            </div>
            <div className="about-art__card about-art__card--employer">
              <span>FOR EMPLOYERS</span>
              <strong>People for the work ahead</strong>
              <small>Recruitment with purpose</small>
            </div>
            <div className="about-art__footer">
              <span>PEOPLE · PURPOSE · PROGRESS</span>
              <span>ACROSS BORDERS</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-section about-who"
        id="about-who-we-are"
        aria-labelledby="about-who-title"
      >
        <div className="about-shell about-who__layout">
          <div id="about-who-title" data-about-reveal>
            <SectionTitle
              centered={false}
              eyebrow="Who we are"
              title="People, opportunities and possibilities without borders."
              text="AMREEN CONSULTANCY provides recruitment and workforce solutions that connect candidates and organisations across international markets."
            />
          </div>
          <div className="about-who__details" data-about-reveal>
            <p>
              We bring candidates and employers together through recruitment
              shaped around real requirements, professional care and clear
              communication.
            </p>
            <ul className="about-check-list">
              <li>
                <Check aria-hidden="true" />
                <span>Guidance for candidates exploring new opportunities</span>
              </li>
              <li>
                <Check aria-hidden="true" />
                <span>Workforce support shaped around employer needs</span>
              </li>
              <li>
                <Check aria-hidden="true" />
                <span>Connections across international markets</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="about-section about-purpose"
        aria-labelledby="about-purpose-title"
      >
        <div className="about-shell">
          <div className="about-purpose__intro" data-about-reveal>
            <p className="about-eyebrow about-eyebrow--light">
              Our purpose
            </p>
            <h2 id="about-purpose-title">
              Clear purpose. Responsible connections.
            </h2>
          </div>
          <div className="about-purpose__grid">
            <article
              className="about-purpose-card about-purpose-card--vision"
              aria-labelledby="about-vision-title"
              data-about-reveal
            >
              <span className="about-purpose-card__index">01 / OUR VISION</span>
              <h3 id="about-vision-title">
                To become a trusted global recruitment partner.
              </h3>
              <p>
                We aim to build trust through long-term relationships, reliable
                workforce solutions and international opportunities—supported
                by ethical and professional recruitment.
              </p>
              <div className="about-purpose-card__tags">
                <span>Long-term relationships</span>
                <span>Ethical recruitment</span>
              </div>
              <Globe2
                className="about-purpose-card__watermark"
                aria-hidden="true"
                strokeWidth={0.8}
              />
            </article>

            <article
              className="about-purpose-card about-purpose-card--mission"
              aria-labelledby="about-mission-title"
              data-about-reveal
            >
              <span className="about-purpose-card__index">02 / OUR MISSION</span>
              <h3 id="about-mission-title">
                Connecting talent with the right opportunity.
              </h3>
              <p>
                We focus on understanding employer requirements, identifying
                suitable candidates and supporting international workforce
                needs with responsible recruitment and transparent processes.
              </p>
              <div className="about-purpose-card__note">
                <BadgeCheck aria-hidden="true" />
                <span>Clear, considered recruitment coordination</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="about-section about-values"
        aria-labelledby="about-values-heading"
      >
        <div className="about-shell">
          <div
            className="about-section-heading"
            id="about-values-heading"
            data-about-reveal
          >
            <SectionTitle
              centered={false}
              eyebrow="Core values"
              title="The principles that guide us."
              text="The way we work matters as much as the connections we make."
            />
          </div>
          <div className="about-card-grid about-values__grid">
            {coreValues.map(({ icon: Icon, title, text }) => (
              <article className="about-value-card" key={title} data-about-reveal>
                <span className="about-value-card__icon">
                  <Icon aria-hidden="true" strokeWidth={1.65} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="about-section about-why"
        aria-labelledby="about-why-heading"
      >
        <div className="about-shell">
          <div
            className="about-section-heading"
            id="about-why-heading"
            data-about-reveal
          >
            <SectionTitle
              centered={false}
              eyebrow="Why Amreen"
              title="Recruitment built around trust and understanding."
              text="A considered approach keeps the needs of candidates and employers in view at every stage."
            />
          </div>
          <div className="about-card-grid about-why__grid">
            {reasonsToChoose.map(({ icon: Icon, title, text }) => (
              <article className="about-why-card" key={title} data-about-reveal>
                <span className="about-why-card__icon">
                  <Icon aria-hidden="true" strokeWidth={1.65} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <ArrowRight
                  className="about-why-card__arrow"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="about-section about-commitment"
        aria-labelledby="about-commitment-title"
      >
        <div className="about-shell about-commitment__layout">
          <div data-about-reveal>
            <p className="about-eyebrow">Our commitment</p>
            <h2 id="about-commitment-title">
              Built for meaningful workforce connections.
            </h2>
          </div>
          <div className="about-commitment__content" data-about-reveal>
            <p>
              AMREEN CONSULTANCY aims to provide clear communication,
              responsible recruitment support and dependable coordination
              between employers and candidates.
            </p>
            <div className="about-commitment__principles">
              <span>Clear communication</span>
              <span>Responsible support</span>
              <span>Dependable coordination</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-section about-cta"
        aria-labelledby="about-cta-title"
      >
        <div className="about-shell about-cta__layout" data-about-reveal>
          <div>
            <p className="about-eyebrow about-eyebrow--light">
              Start a conversation
            </p>
            <h2 id="about-cta-title">
              Ready to explore the right opportunity?
            </h2>
            <p>
              Let’s start a conversation about your recruitment or career
              requirements.
            </p>
          </div>
          <div className="about-cta__actions">
            <button
              className="about-button about-button--primary"
              type="button"
              onClick={() => navigate("contact")}
            >
              Contact Us <ArrowRight aria-hidden="true" />
            </button>
            <button
              className="about-button about-button--secondary"
              type="button"
              onClick={() => navigate("jobs")}
            >
              Explore Opportunities <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
