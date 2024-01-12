/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) {
      return 0; // return 0 if the tree is empty
    }
    
    // recursive function to sum values in the tree
    function sumHelper(node) {
      let sum = node.val;

      for (let child of node.children) {
        sum += sumHelper(child);
      }
      return sum;
    }
    return sumHelper(this.root);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root) {
      return 0; // return 0 if the tree is empty
    }
    // recursive function to count even values in the tree
    function countEvensHelper(node) {
      let count = node.val % 2 === 0 ? 1 : 0;

      for (let child of node.children) {
        count += countEvensHelper(child);
      }
      return count;
    }
    return countEvensHelper(this.root);

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) {
      return 0; // return 0 if the tree is empty
    }
    // recursive function to count nodes greater than lowerBound
    function numGreaterHelper(node) {
      let count = node.val > lowerBound ? 1 : 0;

      for (let child of node.children) {
        count += numGreaterHelper(child);
      }
      return count;
    }
    return numGreaterHelper(this.root);
  }
}

module.exports = { Tree, TreeNode };
