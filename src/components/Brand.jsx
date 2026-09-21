<<<<<<< HEAD
import headerLogo from '../assets/Logo/Amreen Blue Logo hortizontel.png';
import headerLogoFull from '../assets/Logo/Amreen Blue Logo.png';
=======
import headerLogo from '../assets/Logo/AMREEN Logo.png';
import headerLogoFull from '../assets/Logo/AMREEN Logo.png';

import headerIconFull from '../assets/Logo/Amreen Icon.png';
import headerIcon from '../assets/Logo/Amreen Icon.png';
>>>>>>> origin/Ashnab-New

export default function Brand({ light = false, full = false }) {
  return (
    <div className={`brand ${light ? 'brand-light' : ''}`}>
      <img
<<<<<<< HEAD
=======
        src={full ? headerIconFull : headerIcon}
        alt="AMREEN CONSULTANCY - Overseas Recruitment"
      />
      <img
>>>>>>> origin/Ashnab-New
        src={full ? headerLogoFull : headerLogo}
        alt="AMREEN CONSULTANCY - Overseas Recruitment"
      />
    </div>
  );
}

