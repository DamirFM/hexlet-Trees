// Реализуйте и экспортируйте по умолчанию функцию, 
// которая создает и возвращает такую файловую систему (порядок элементов важен):

// Обратите внимание на метаданные
 
// nodejs-package # директория (метаданные: { hidden: true })
// ├── Makefile # файл
// ├── README.md # файл
// ├── dist # пустая директория
// ├── __tests__ # директория
// │   └── half.test.js # файл (метаданные: { type: 'text/javascript' })
// ├── babel.config.js # файл (метаданные: { type: 'text/javascript' })
// └── node_modules # директория (метаданные: { owner: 'root', hidden: false })
//    └── @babel # директория
//        └── cli # директория
//            └── LICENSE # файл



// @ts-check

import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)
const generator = mkdir('etc', [
  mkfile('bashrc'),
  mkdir('consul', [
    mkfile('config.json'),
  ]),
]);
// END
