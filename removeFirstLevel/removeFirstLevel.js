// BEGIN (write your solution here)
const makeFlat = function (arr) {
    return arr.reduce(function (a, c) {
      let v = c instanceof Array ? makeFlat(c) : c;
      return a.concat(v)
    }, [])
  }
  export default makeFlat;
// END
