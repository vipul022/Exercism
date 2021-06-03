//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name) => {
  let result = "One for you, one for me.";
  if (name) {
    return (result = result.replace(/you/i, name));
  } else {
    return result;
  }
};
