// import headerLogo from '../assets/Logo/AMREEN Logo.png';
// import headerLogoFull from '../assets/Logo/AMREEN Logo.png';

// import headerIconFull from '../assets/Logo/Amreen Icon.png';
// import headerIcon from '../assets/Logo/Amreen Icon.png';

// export default function Brand({ light = false, full = false }) {
//   return (
//     <div className={`brand ${light ? 'brand-light' : ''}`}>
//       <img
//         src={full ? headerIconFull : headerIcon}
//         alt="AMREEN CONSULTANCY - Overseas Recruitment Icon"
//       />
//       <img
//         src={full ? headerLogoFull : headerLogo}
//         alt="AMREEN CONSULTANCY - Overseas Recruitment Logo"
//       />
//     </div>
//   );
// }



import headerLogo from '../assets/Logo/AMREEN Logo.png';
import headerLogoWhite from '../assets/Logo/AMREEN Logo White.png';

import headerIcon from '../assets/Logo/Amreen Icon.png';
import headerIconWhite from '../assets/Logo/Amreen Icon White.png';

export default function Brand({ light = false }) {
  return (
    <div className={`brand ${light ? 'brand-light' : ''}`}>
      <img
        src={light ? headerIconWhite : headerIcon}
        alt="AMREEN CONSULTANCY - Overseas Recruitment Icon"
      />

      <img
        src={light ? headerLogoWhite : headerLogo}
        alt="AMREEN CONSULTANCY - Overseas Recruitment Logo"
      />
    </div>
  );
}