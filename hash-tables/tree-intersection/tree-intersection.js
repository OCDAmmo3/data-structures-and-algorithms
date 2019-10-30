'use strict';

const compareTrees = (tree1, tree2) => {
  let results = [];
  let longTree, shortTree;
  if(tree1.length > tree2.length) {
    longTree = tree1;
    shortTree = tree2;
  } else {
    longTree = tree2;
    shortTree = tree1;
  }
  for(let i = 0; i < longTree.length; i++) {
    for(let j = 0; j < shortTree.length; j++) {
      if(shortTree[j] === longTree[i]) {
        results.push(shortTree[j]);
      }
    }
  }
  return results;
}

module.exports = compareTrees;
