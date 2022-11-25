export default function getHiddenFilesCount (tree) {
    if (isFile(tree) ) {
      return 1;
    }
    const children = getChildren(tree);
    // Самая сложная часть
    // Считаем количество потомков для каждого из детей,
    // вызывая рекурсивно нашу функцию getNodesCount
    const descendantCounts = children.map(getHiddenFilesCount);
    // Возвращаем 1 (текущая директория) + общее количество потомков
    console.log(descendantCounts)
    return 1 + _.sum(descendantCounts);
    
  }