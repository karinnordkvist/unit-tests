export const filterNumbers = (array, largerThan) => {
  let newArray = array.filter((number) => number <= largerThan);
  return newArray;
};
