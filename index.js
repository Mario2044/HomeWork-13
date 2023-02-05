//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
const myArray = [1, 2, 3, 4, 5, 6, 7];

function removeValue(value, index, arr) {
  if (value === 5) {
    arr.splice(index, 1);
    return true;
  }
  return false;
}

const x = myArray.filter(removeValue);

console.log(`myArray values: ${myArray}`);
console.log(`variable x value: ${x}`);
