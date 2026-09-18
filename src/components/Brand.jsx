import headerLogo from '../assets/Logo/AMREEN Logo.png';
import headerLogoFull from '../assets/Logo/AMREEN Logo.png';

import headerIconFull from '../assets/Logo/Amreen Icon.png';
import headerIcon from '../assets/Logo/Amreen Icon.png';

export default function Brand({ light = false, full = false }) {
  return (
    <div className={`brand ${light ? 'brand-light' : ''}`}>
      <img
        src={full ? headerIconFull : headerIcon}
        alt="AMREEN CONSULTANCY - Overseas Recruitment"
      />
      <img
        src={full ? headerLogoFull : headerLogo}
        alt="AMREEN CONSULTANCY - Overseas Recruitment"
      />
    </div>
  );
}

