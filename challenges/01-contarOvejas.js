// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' },
];

// Retorna si la letra esta incluida en modo case insensitive
function doesIncludeLetter(letter, chain) {
  const upperCase = letter.toUpperCase();
  const lowerCase = letter.toLowerCase();
  return chain.includes(upperCase) || chain.includes(lowerCase);
}

function contarOvejas(ovejas) {
  return ovejas.filter((oveja) =>
    oveja.color === 'rojo' &&
    doesIncludeLetter('a', oveja.name) &&
    doesIncludeLetter('n', oveja.name)
      ? true
      : false
  );
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
