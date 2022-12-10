// BEGIN (write your solution here)
export default function findFilesByName (tree, str) {
    const ancestry = (node, depth) => {
      const name = getName(node);
      const children = getChildren(node);
  
      // Если директория пустая, то добавляем ее в список
      if (str.includes(str)) {
        console.log(name)
        return name;
      }
      // Оставляем только директории
      return children.filter(isFile)
        // Не забываем увеличивать глубину
        .flatMap((child) => iter(child, depth + 1));
    }
    // Начинаем с глубины 0
    return ancestry(tree, 0);
  }
  // END