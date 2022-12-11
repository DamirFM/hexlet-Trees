// BEGIN (write your solution here)
export default function findFilesByName (tree, str) {
    const ancestry = (node, maxDepth = Infinity) => {
      const name = getName(node);
      const children = getChildren(node);
  
      // Если директория пустая, то добавляем ее в список
      if (isFile(node) || name.includes(str) ) {
        
        return name;
      }
      // Оставляем только директории
      console.log(children.flatMap((child) => ancestry(child, maxDepth)))
      return children
      .flatMap((child) => ancestry(child, maxDepth))
      
        
        // Не забываем увеличивать глубину
  
   
    }
    // Начинаем с глубины 0
    return ancestry(tree , 0);
  }
  // END
  