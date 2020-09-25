import AndroidSockHop from "../assets/sounds/Android Sock Hop.mp3";
import KingsOfTara from "../assets/sounds/Kings of Tara.mp3";
import OnionCapers from "../assets/sounds/Onion Capers.mp3";
import Robobozo from "../assets/sounds/Robobozo.mp3";
import Zazie from "../assets/sounds/Zazie.mp3";

export const quizMusic = (num) => {
  let currentMusic;
  switch (num) {
    case 1:
    case 6:
      currentMusic = OnionCapers;
      break;
    case 2:
    case 7:
      currentMusic = Robobozo;
      break;
    case 3:
    case 8:
      currentMusic = Zazie;
      break;
    case 4:
    case 9:
      currentMusic = AndroidSockHop;
      break;
    case 5:
    case 10:
      currentMusic = KingsOfTara;
      break;
    default:
      currentMusic = OnionCapers;
  }
  return currentMusic;
};
