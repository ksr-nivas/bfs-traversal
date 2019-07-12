// Import stylesheets
import './style.css';
import BFS from './bfs.js';

let bfsGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];

const bfs = new BFS(bfsGraph, 1);
const obj = bfs.execute();
console.log(obj);

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Breadth First Search</h1>`;