import headerLogo from '../assets/Logo/Amreen Blue Logo hortizontel.png';
import headerLogoFull from '../assets/Logo/Amreen Blue Logo.png';

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

