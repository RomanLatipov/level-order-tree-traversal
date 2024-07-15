class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
function concatNodes(root) {    
  let left = [];
  let right = [];
  if (root.left)
    left = root.left;
  if (root.right)
    right = root.right;
  return [left, right]
}

function levelOrderTraversal(root) {
  if (root === null) return [];
  const result = [[root.value]];
  if (root.left || root.right) {
    let nodes = [root.left, root.right];
    console.log(nodes)
  
    let run = true;

    while (run) {
      const arr1 = [];
      const arr2 = [];
      for (let i=0; i<nodes.length; i++) {
        if(nodes[i] !== null && nodes[i].length !== 0) {
          arr1.push(nodes[i].value);
          arr2.push(concatNodes(nodes[i]));
        }
      }
      if (arr1.length === 0) {
        run = false;
        break;
      }
      result.push(arr1);
      nodes = arr2.flat();
    }
  }
  
  return result.flat();
}

if (require.main === module) {
  let root = new Node(1, new Node(2), new Node(3));
                  // 1
                // 2   3

  // add your own tests in here
  console.log("Expecting: [[1], [2, 3]]");
  console.log(levelOrderTraversal(root));

  // console.log("");
  root = new Node(10, new Node(20, new Node(9), new Node(22)), new Node(30));
  //                       // 10
  //                     //20    30
  //                   //9  22

  console.log("Expecting: [[10], [20, 30], [9, 22]]");
  console.log(levelOrderTraversal(root));
}

module.exports = {
  Node,
  levelOrderTraversal
};

// Please add your pseudocode to this file
// And a written explanation of your solution
