//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export const twoFer = (name) => {
//   let result = "One for you, one for me.";
//   if (name) {
//     return (result = result.replace(/you/i, name));
//   } else {
//     return result;
//   }
// };

export const twoFer = (name = "") => {
  return name ? `One for ${name}, one for me.` : `One for you, one for me.`;
};
