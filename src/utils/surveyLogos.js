
import Teal from "../assets/images/teal-csi-logo.png"
import Burnt from "../assets/images/brnt-csi-logo.png"
import Purp from "../assets/images/purp-csi-logo.png"
import Blue from "../assets/images/blue-csi-logo.png"
import Moss from "../assets/images/moss-csi-logo.png"
import Mint from "../assets/images/mint-csi-logo.png"


export const surveyLogoColor = (num) => {
  let currentLogo;
  switch (num) {
    case 1:
    case 6:
      currentLogo = Teal;
      break;
    case 2:
    case 7:
      currentLogo = Burnt;
      break;
    case 3:
    case 8:
      currentLogo = Purp;
      break;
    case 4:
    case 9:
      currentLogo = Blue;
      break;
    case 5:
    case 10:
      currentLogo = Moss;
      break;
    case 11:
      currentLogo = Mint;
      break;
    default:
      currentLogo = Mint;
  }
  return currentLogo;
};
