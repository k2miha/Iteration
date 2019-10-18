'use strict';

const ages = persons => {
  const ages = {};
  for (const key in persons) {
    const elem = persons[key];
    ages[key] = elem.died - elem.born;
  }
  return ages;
};

module.exports = { ages };
