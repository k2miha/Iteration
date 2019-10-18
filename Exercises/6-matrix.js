'use strict';

const max = matrix => {
  const array = matrix.flat(Infinity);
  let maximum = 0;
  for (let iterator = 0; iterator < array.length; iterator++) {
    if (array[iterator] > maximum) {
      maximum = array[iterator];
    }
  }
  return maximum;
};

module.exports = { max };
