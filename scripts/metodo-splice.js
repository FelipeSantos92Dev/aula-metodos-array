let playlist = [
  "Funk", // 0
  "Hip-Hop", // 1
  "Pop", // 2
  "Rock", // 3
  "Jazz", // 4
];

console.log("Antes do splice");
console.table(playlist);

// Removendo 2 elementos a partir do índice 2
let elementosRemovidos = playlist.splice(2, 2);

console.log("Depois do splice");
console.table(playlist);

console.log("Elementos removidos: ", elementosRemovidos);
