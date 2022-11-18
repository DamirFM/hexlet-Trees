// BEGIN (write your solution here)
export function compressImages (dir) {
    console.log(dir);
    const [file] = getChildren(dir);
    
    getName(file);
    getMeta(file);
    console.log(getMeta(file));
  }
  // END