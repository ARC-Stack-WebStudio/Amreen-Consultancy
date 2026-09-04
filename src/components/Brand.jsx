import headerLogo from '../assets/Logo/header-logo-compact.jpg';
import headerLogoFull from '../assets/Logo/header-logo-full.jpg';

export default function Brand({ light = false, full = false }) {
  return (
    <div className={`brand ${light ? 'brand-light' : ''}`}>
      <img
        src={full ? headerLogoFull : headerLogo}
        alt="AMREEN CONSULTANCY - Overseas Recruitment"
      />
    </div>
  );
}

