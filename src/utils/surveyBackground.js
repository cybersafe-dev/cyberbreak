export const surveyBackgroundColor = (num) => {
  let currentColor;
  switch (num) {
    case 1:
    case 6:
      currentColor = "#00A1B2";
      break;
    case 2:
    case 7:
      currentColor = "#E15100";
      break;
    case 3:
    case 8:
      currentColor = "#E05CAB";
      break;
    case 4:
    case 9:
      currentColor = "#315EFF";
      break;
    case 5:
    case 10:
      currentColor = "#308114";
      break;
    default:
      currentColor = "#D80000";
  }
  return currentColor;
};
