// BEGIN (write your solution here)
export function compressImages(tree) {
  const children = getChildren(tree);
  const newChildren = children.map((child) => {
    const name = getName(child);
    const newMeta = _.cloneDeep(getMeta(child));
    if (isFile(child)) {
      return mkdir(name.toLowerCase(), getChildren(child), newMeta);
    }
    return mkfile(name.toLowerCase(), newMeta);
  });
  const newMeta = _.cloneDeep(getMeta(tree));
  const tree2 = mkdir(getName(tree), newChildren, newMeta);
  console.log(tree2);
}
  // END