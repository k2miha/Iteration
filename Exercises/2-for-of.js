'use strict';

const sum = (...args) => {
  let acc = 0;
  for (const iterator of args) {
    acc += iterator;
  }
  return acc;
};

module.exports = { sum };
