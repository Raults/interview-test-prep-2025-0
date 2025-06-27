class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ?? 0;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}

function invertTree(root: TreeNode | null): TreeNode | null {
    if(!root) return null;

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
}

function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if(root === null) return false;

    let newSum = targetSum - root.val

    if (!root.left && !root.right && root.val === targetSum) {
       return true;
    }

    let leftPath = hasPathSum(root.left, newSum);
    let rightPath = hasPathSum(root.right, newSum);

    return leftPath || rightPath;
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null || q === null) {
        if (p === null && q === null) {
            return true;
        } else {
            return false
        }
    } else if (p!.val === q!.val) {
        let leftPath = isSameTree(p!.left, q!.left);
        let rightPath = isSameTree(p!.right, q!.right);

        return leftPath && rightPath;
    } else {
        return false;
    }
}

function isSameTreeAI(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null || q === null) {
        return p === q;
    }

    if (p.val !== q.val) {
        return false;
    }

    return isSameTreeAI(p.left, q.left) && isSameTreeAI(p.right, q.right);
}

function isSymmetric(root: TreeNode | null): boolean {
if (!root) return true;

    function isMirror(t1: TreeNode | null, t2: TreeNode | null): boolean {
        if (t1 === null || t2 === null) {
            return t1 === t2;
        }

        let compareOutter = t1.left === t2.right;
        let compareInner = t2.left === t1.right;

        return compareOutter && compareInner;
    }

    return isMirror(root.left, root.right);
}

function isSymmetricAI(root: TreeNode | null): boolean {
    if (!root) return true;

    function isMirrorAI(t1: TreeNode | null, t2: TreeNode | null): boolean {
        if (!t1 && !t2) return true; 
        if (!t1 || !t2) return false;
        if (t1.val !== t2.val) return false;

        return isMirrorAI(t1.left, t2.right) && isMirrorAI(t1.right, t2.left);
    }

    return isMirrorAI(root.left, root.right);
}

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) return [];

    const result: number[][] = [];
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const level: number[] = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
    }

    return result;
}


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

function invertTreeAgain(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    let temp = root.right;
    root.right = root.left;
    root.left = temp;

    invertTreeAgain(root.right);
    invertTreeAgain(root.left);

    return root;
}

function maxPathSum(root: TreeNode | null): number {
    let max = -Infinity;

    function dfs(node: TreeNode | null): number {
        if (!node) return 0;

        const left = Math.max(0, dfs(node.left));   // Don't take negative paths
        const right = Math.max(0, dfs(node.right)); // Same here

        // Best path *through* this node (might become global max)
        const localMax = node.val + left + right;
        max = Math.max(max, localMax);

        // Return the best one-sided path to parent
        return node.val + Math.max(left, right);
    }

    dfs(root);
    return max;
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    if (!root) return null;

    // root is the first parent, so check for common
    if ((root.left === q && root.right === p) || (root.left === q && root.right === p )) {
        return root;
    }



    let checkLeft = lowestCommonAncestor(root.left, p, q);
    let checkRight = lowestCommonAncestor(root.right, p, q);
    
    // if we find p, find it's immediate parent and then do the same to q, compare parents, if not equal, compare their parents, and so on.


}

function lowestCommonAncestorAI(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    if (!root) return null;

    // If both nodes are less than root, go left
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestorAI(root.left, p, q);
    }

    // If both nodes are greater than root, go right
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestorAI(root.right, p, q);
    }

    // Otherwise, current root is split point / LCA
    return root;
}