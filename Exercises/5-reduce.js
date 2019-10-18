'use strict';

const sum = (...args) => [...args].reduce((acc, item) => acc + item, 0);
module.exports = { sum };
