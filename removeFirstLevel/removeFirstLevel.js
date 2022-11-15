const removeFirstLevel = (arr) => {
  const filteredArr = arr.filter(Array.isArray);
  console.log(filteredArr);
  return filteredArr.flat();
}
export default removeFirstLevel;