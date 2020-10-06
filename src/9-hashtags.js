export const hashtags = (text) => {
  let newTextArray = text.split(' ');
  return newTextArray.filter((word) => word.startsWith('#'));
};
