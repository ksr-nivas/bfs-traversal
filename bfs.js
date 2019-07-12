// Breadth First Search

export default class BFS{
  constructor(graph, root){
    this.graph = graph;
    this.root = root;
  }

  execute(){
    let nodesLen = {};
  
    for (let i = 0; i < this.graph.length; i++) {
      nodesLen[i] = Infinity;
    }
    nodesLen[this.root] = 0; 
    
    let queue = [this.root], current;

    while (queue.length !== 0) {
      current = queue.shift();
      
      let curConnected = this.graph[current];
      let neighborIdx = []; 
      let idx = curConnected.indexOf(1); 
      while (idx !== -1) {
        neighborIdx.push(idx); 
        idx = curConnected.indexOf(1, idx + 1); 
      }
      
      for (let j = 0; j < neighborIdx.length; j++) {
        if (nodesLen[neighborIdx[j]] === Infinity) {
          nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
          queue.push(neighborIdx[j]); 
        }
      }
    }
    
    return nodesLen;
  }
}