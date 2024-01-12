/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) {
      return 0;
    }
    function minDepthHelper(node) {
      if(!node) {
        return Number.POSITIVE_INFINITY;
      }

      if (!node.left && !node.right) {
        return 1;
      }
      return 1 + Math.min(minDepthHelper(node.left), minDepthHelper(node.right));
    }
    return minDepthHelper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) {
      return 0;
    }
    function maxDepthHelper(node) {
      if(!node) {
        return 0;
      }
      return 1 + Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right));
    }
    return maxDepthHelper(this.root);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) {
      return 0;
    }
    let maxSum = Number.MIN_SAFE_INTEGER;

    function maxSumHelper(node) {
      if (!node) {
        return 0;
      }
      const leftMax = Math.max(0, maxSumHelper(node.left));
      const rightMax = Math.max(0, maxSumHelper(node.right));

      maxSum = Math.max(maxSum, leftMax + rightMax + node.val);

      return Math.max(leftMax, rightMax) + node.val;
    }
    maxSumHelper(this.root);
    return maxSum;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = null; 

    function nextLargerHelper(node) {
      if (!node) {
        return;
      }
      if (node.val > lowerBound) {
        if (!result || node.val < result) {
          result = node.val;
        }
      }
      if (node.val <= lowerBound || !result || node.val < result) {
        nextLargerHelper(node.right);
      } else {
        nextLargerHelper(node.left);
      }
    }
    nextLargerHelper(this.root);
    return result;

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
