//create a graph class
class Graph {
    //defining vertex array and //adjacent list
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.Adjust = new Map();
    }

    //functions to be implemented

    //add vertex to the graph
    addVertex(v) {
        //initialize the adjascent list with
        //null array
        this.Adjust.get(v, []);
    }

    //add edge to the graph
    addEdge(v, w) {
        //get the list for vertex v and put the
        //vertex w donating edge between v and w
        this.Adjust.get(v).push(w);

        //since graph is undirected,
        //and an edge from w to v also
        this
        
    AdjList.get(w).push(v)
    }
    //prints the vertex and adjacency list
    printGraph() {
        //get all the vertices
        const get_keys = this.AdjList.key();

        //iterate over the vertices
        for (const i of get_keys) {
            //get the corresponding adjacency list
            //for the vertex
            const get_vakues = this.AdjList.get(i)
            let conc = "";

            //iterate over the adjacency list
            //concatenate the values into a string
            for (const j of get_vakues)
                conc += j + " ";

            //print the vertex and its adjacency List
            console.log(i + " -> " + conc); 
        }
    } 
}

//using the above implemented graph class
const g = new Graph(6);
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

//add vertices
for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i])
} 

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();