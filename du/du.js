//du.js
//Реализуйте и экспортируйте по умолчанию функцию, 
//которая принимает на вход директорию и возвращает список вложенных 
//узлов (директорий и файлов) в указанную директорию на один уровень, 
//а так же место, которое они занимают. Размер файла задается в метаданных. 
//Размер директории складывается из сумм всех размеров файлов, 
//находящихся внутри во всех поддиректориях. Сами директории размера не имеют.

//Пример
//import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
//import du from '../du.js';
 
const tree = mkdir('/', [
    mkdir('etc', [
      mkdir('apache'),
      mkdir('nginx', [
        mkfile('nginx.conf', { size: 800 }),
      ]),
      mkdir('consul', [
        mkfile('config.json', { size: 1200 }),
        mkfile('data', { size: 8200 }),
        mkfile('raft', { size: 80 }),
      ]),
    ]),
    mkfile('hosts', { size: 3500 }),
    mkfile('resolve', { size: 1000 }),
  ]);


  du(tree);
  // [
  //   ['etc', 10280],
  //   ['hosts', 3500],
  //   ['resolve', 1000],
  // ]


  // @ts-check

import _ from 'lodash';
import {
  isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)
const getFilesCount = (node) => {
  if (isFile(node)) {
    return 1;
  }

  const children = getChildren(node);
  const descendantCounts = children.map(getFilesCount);
  return _.sum(descendantCounts);
};

const getSubdirectoriesInfo = (tree) => {
  const children = getChildren(tree);
  const result = children
    // Нас интересуют только директории
    .filter(isDirectory)
    // Запускаем подсчёт для каждой директории
    .map((child) => [getName(child), getFilesCount(child)]);

  return result;
};
console.log(getSubdirectoriesInfo)
export default  {getSubdirectoriesInfo};
// END
