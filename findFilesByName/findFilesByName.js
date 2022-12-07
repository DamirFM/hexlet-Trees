// BEGIN (write your solution here)
export default function findFilesByName (tree, str) {
    const ancestry = (node, depth) => {
      const name = getName(node);
      const children = getChildren(node);
  
      // Если директория пустая, то добавляем ее в список
      if (children.length === 0) {
        return name;
      }
  }
  // END