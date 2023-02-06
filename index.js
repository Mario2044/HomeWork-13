//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
const myArray = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, item) {
  for (let i = arr.length; i--;) {
    if (arr[i] === item) arr.splice(i, 1);
  }
  console.log(arr, item);
}

removeElement(myArray, 4);
