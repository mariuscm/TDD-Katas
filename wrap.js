// const wrap = (str, maxLen) => {
//   if (str.length > maxLen) {
//     if (str.charAt(maxLen) !== " ") {
//       //find the space before that index
//       let indexOfPriorSpace = str.lastIndexOf(" ", maxLen);
//       return `${str.substring(0, indexOfPriorSpace + 1)}\n${str.substring(
//         indexOfPriorSpace + 1,
//         str.length
//       )}`;
//     } else {
//       return `${str.substring(0, maxLen)}\n${str.substring(
//         maxLen,
//         str.length
//       )}`;
//     }
//   } else {
//     return str;
//   }
// };

const wrap = (str, maxLen) => {
  let lines = [];
  while (str.length > maxLen) {
    if (str.charAt(maxLen - 1) == " ") {
      const thisLine = `${str.substring(0, maxLen - 1)}`;
      lines.push(thisLine);
      str = str.substring(maxLen, str.length);
      if (str.charAt(0) == " ") {
        str = str.substring(1);
      }
    } else {
      let indexOfPriorSpace = str.lastIndexOf(" ", maxLen);
      const thatLine = `${str.substring(0, indexOfPriorSpace)}`;
      lines.push(thatLine);
      str = str.substring(indexOfPriorSpace, str.length);
      if (str.charAt(0) == " ") {
        str = str.substring(1);
      }
    }
  }
  lines.push(str);

  return lines.join(`\n`);
};

module.exports = wrap;
