// BEGIN (write your solution here)
export function compressImages(tree) {

  const children = getChildren(tree);
  const newChildren = children.map((child) => {
    const name = getName(child);
    const newMeta = _.cloneDeep(getMeta(child));
    if (isFile(child)) {
      return mkdir(name, getChildren(child), newMeta.size / 2);
    }
    return mkfile(name, newMeta.size / 2);
  });
  const newMeta = _.cloneDeep(getMeta(tree));
  const tree2 = mkdir(getName(tree), newChildren, newMeta.size / 2);
  console.log(tree2);
}
  // END