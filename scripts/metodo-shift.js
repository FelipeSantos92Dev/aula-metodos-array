let playlist = ["Funk", "Hip-Hop", "Pop"];

console.log("Antes do shift");
console.table(playlist);

// Removendo o primeiro estilo
let estiloRemovido = playlist.shift();

console.log("Depois do shift");
console.table(playlist);

console.log("Estilo removido: ", estiloRemovido);
