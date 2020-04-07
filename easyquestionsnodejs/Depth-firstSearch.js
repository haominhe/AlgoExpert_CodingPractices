/**
You're given a Node class that has a name and an array of optional children nodes.
When put together, nodes form an acyclic tree-like structure.
Implement the depthFirstSearch method on the Node class, which takes in an
empty array, traverses the tree using the Depth-first Search approach (specifically
navigating the tree from left to right), stores all of the nodes' names in the input array, and
returns it.

Sample Input:
graph = A
    B   C   D
   E  F      G H
     I J     K

Sample Output:
['A','B','E','F','I','J','C','D','G','K','H']


O(v + e) time | O(v) space - where v is the number of vertices of the input graph and e is
the number of edges of the input graph

 */


class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    // Method 1
    depthFirstSearch1(array) {
        array.push(this.name);
        if (this.children) {
            for (let index in this.children) {
                this.dfsHelper(array, this.children[index])
            }
        }
        // console.log(array);
        return array;
    }

    dfsHelper(array, kidchildren) {
        if (kidchildren.length === 0) return;
        const curName = kidchildren.name;
        array.push(curName);
        if (kidchildren.children.length) {
            kidchildren.children.forEach((e) => {
                this.dfsHelper(array, e)
            })
        }
        return;
    }

    // Method 2
    depthFirstSearch(array) {
        array.push(this.name);
        for (const kid of this.children) {
            // go inside of kid's scope and call kid's function
            kid.depthFirstSearch(array);
        }
        return array;
    }
}

exports.Node = Node;
