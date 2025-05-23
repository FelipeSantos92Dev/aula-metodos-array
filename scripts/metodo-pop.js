let playlist = ["Funk", "Hip-Hop", "Pop"];

console.log("Antes do pop");
console.table(playlist);

// Removendo o último estilo
let estiloRemovido = playlist.pop();

console.log("Depois do pop");
console.table(playlist);

console.log("Estilo removido: ", estiloRemovido);
