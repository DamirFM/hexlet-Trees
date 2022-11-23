//Допустим, мы хотим реализовать функцию, которая меняет владельца для всего дерева, 
//то есть всех директорий и файлов. Для этого нам придётся соединить две вещи
//: рекурсию, разобранную выше, и код обновления узлов,


const changeOwner = (tree, owner) => {
    const name = getName(tree);
    const newMeta = _.cloneDeep(getMeta(tree));
    newMeta.owner = owner;

    if (isFile(tree)) {
        // Возвращаем обновлённый файл
        return mkfile(name, newMeta);
      }
    
    const children = getChildren(tree);
        // Ключевая строчка
        // Вызываем рекурсивное обновление каждого ребёнка
    const newChildren = children.map((child) => changeOwner(name, newMeta));
        // Возвращаем обновлённую директорию
  return newTree;
};

        // Эту функцию можно обобщить до map (отображения), работающего с деревьями
