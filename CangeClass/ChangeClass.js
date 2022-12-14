// @ts-check
import _ from 'lodash';

// BEGIN (write your solution here)
export default function changeClass (tree ) {
    console.log(tree)
    const className = _.cloneDeep(className(tree))
      const filtered = tree.children
        .map((node) => {
          // Перед фильтрацией отфильтровываем всех потомков
          if (node.type === 'tag-internal') {
    
            // Тут самый важный момент. Рекурсивно вызываем функцию фильтрации.
            // Дальнейшая работа не завершится, пока функция фильтрации не отфильтрует вложенные пустые узлы.
    
            return changeClass(node);
          }
          return node;
        })
       
    }
// END