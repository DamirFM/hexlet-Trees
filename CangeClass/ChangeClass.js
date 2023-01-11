// @ts-check
import _ from 'lodash';

// BEGIN (write your solution here)
const changeClass = (tree, classNameFrom, classNameTo) => {
    const iter = (node) => {
      const updatedNode = { ...node };
  
      if (_.has(node, 'className')) {
        const newClassName = classNameFrom === node.className ? classNameTo : node.className;
        updatedNode.className = newClassName;
      }
  
      if (node.type === 'tag-internal') {
        const newChildren = node.children.map(iter);
        updatedNode.children = newChildren;
      }
  
      return updatedNode;
    };
  
    return iter(tree);
  };
  
  export default changeClass;

// END


const changeClass = (tree, oldClass, newClass) => {
    const newTree = _.cloneDeep(tree);
  
    if (newTree.className === oldClass) newTree.className = newClass;
  
    if (newTree.children) {
      newTree.children = newTree.children.map((child) => changeClass(child, oldClass, newClass));
    }
  
    return newTree;
  };
  
  export default changeClass;