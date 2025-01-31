//Node class
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

//Binary Search tree class
class BinarySearchTree {
    constructor() {
        //root of a binary search tree
        this.root = null;
    }

    //function to be implemented
    //helper method which creates a new node to be inserted and calls insertNode
    insert(data) {
        //creating a node and initialising with data
        const newNode = new Node(data);

        //root is null then node will
        //be added to the tree and made root
        if (this.root === null)
            this.root = newNode;
        else
            //find the correct position in the tree and add the node
            this.insertNode(this.root, newNode);
    }
    //Method to insert a node in a tree
    //it moves over the tree to find the location to insert a node with a given data
    insertNode(node, newNode) {
        //if the data is less than the node, data moves left of the tree
        if (newNode.data < node.data) {
            //if left is null insert node here
            if (node.left === null)
                node.left = newNode;
            else
                //if left is not null recur until
                //null is found
                this.insertNode(node.left, newNode);
        }

        //if the data is more than the node 
        //data move right of the tree
        else {
            //if right is null insert node here
            if (node.right === null)
                node.right = newNode;
            else

                //if right is not null recur until
                //null is found 
                this.insertNode(node.right, newNode);
        }
    }

    //helper method that calls the removeNode with a given data
    remove(data) {
        //root is re-initialized with 
        //root of a modified tree
        this.root = this.removeNode(this.root, data);
    }

    //Method to remove node with a 
    //given data 
    //it recur over the tree to find the
    //data and removes it
    removeNode(node, key) {
        //if the root is null then tree is empty
        if (node === null)
            return null;

        //if data to be deleted is less than
        //root data then move to left subtree
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }

        //if data to be deleted is greater than
        //roots data then move to the right subtree
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }

        //if data is similar to the root's data
        //then delete this node
        else {
            //deleting node with no children
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            //deleting node with one child
            if (node.left === null) {
                node = node.right;
                return node;
            }

            else if(node.right === null) {
                node = node.left;
                return node;
            }

            //Deleting node with two children
            //minimum node of the right subtree
            //is stored in aux
            const aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }



    //finds the minimum node in tree
    //searching starts from given node
    findMinNode(node) {
        //if left of a node is null
        //then it must be minimum node
        if (node.left === null)
            return node;
        else 
        return this.findMinNode(node.left);
    }


    //returns root of the tree
    getRootNode() {
        return this.root;
    }

    //performs inorder traversal of a tree
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);  
        }
    }

    //Performs preorder traversal of a tree
    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);   
        }
    }

    //Performs postorder traversal of a tree
    postorder(node) {
        if(node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    //search for a node with given data
    search(node, data) {
        //if trees is empty return null
        if (node === null)
            return null;

        //if data is less than node's data
        //move left
        else if (data < node.data)
            return this.search(node.left, data);

        //if data is more than node's data
        //move right
        else if (data > node.data)
            return this.search(node.right, data);

        //if data is equal to the node data
        //return node 

        else 
        return node;
    }
}
//create an object for the BinarySearchTree
const BST = new BinarySearchTree();

//Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

// const root = BST.getRootNode();

//prints 5 7 9 10 13 15 17 22 27
// console.log("Initial tree: ");
// BST.inorder(root);

//Removing node with one child
BST.remove(5);

const root = BST.getRootNode();

console.log("Tree after removing 5: ");
//prints 7 9 10 13 15 17 22 25 27
BST.inorder(root);

// //Removing node with one child
// BST.remove(7);

// const root = BST.getRootNode();

// console.log("Tree after removing 7: ");
// //prints 9 10 13 15 17 22 25 27
// BST.inorder(root);

// BST.remove(15);

// const root = BST.getRootNode();
// console.log("Inorder traversal: ");
// // prints 9 10 13 17 22 25 27
// BST.inorder(root);
            
// console.log("Postorder traversal: ");
// BST.postorder(root);

// console.log("Preorder traversal: ");
// BST.preorder(root);



