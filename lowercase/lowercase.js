// @ts-check

import {
    mkdir, mkfile, isFile, getName, getMeta, getChildren,
  } from '@hexlet/immutable-fs-trees';
  import _ from 'lodash';
  
  // BEGIN (write your solution here)
  export default function downcase (tree) {
    const name = getName(tree);
    const newMeta = _.cloneDeep(getMeta(tree));
    
  
    if (isFile(tree)) {
      // Возвращаем обновлённый файл
      return mkfile(name.toLowerCase(), newMeta);
    }
  
    const children = getChildren(tree);
    // Ключевая строчка
    // Вызываем рекурсивное обновление каждого ребёнка
    const newChildren = children.map((child) => downcase(child));
    const newTree = mkdir(name, newChildren, newMeta);
  
    // Возвращаем обновлённую директорию
    return newTree;
  };
  // END
  