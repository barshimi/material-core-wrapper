
const componentVal = (val) => Object.prototype.toString.call(val) === "[object String]" ? `'${val}'` : val;

const componentImp = (component = '', props = {}) => `${Object.keys(Object.prototype.toString.call(props) === '[object Object]' ? props : {}).reduce((str, key) => {
  str += `${key}={${componentVal(props[key])}} `;
  return str;
}, `<${component} `)}/>`

function ComponentInitializer (component) {
  if (!component.length) return '';
  const storyPath = process.cwd() + `/packages/${process.env.component}/storyProps.js`;
  let context = {};
  try {
    context = require(storyPath);
  } catch (error) {
    console.log('StoryProps file is missing');
  }
  let componentPath = process.cwd() + `/packages/${component}/index.js`;
  
  return `
  import React from 'react';
  import ${component} from '${componentPath}';
  import ReactDOM from 'react-dom';

  ReactDOM.render(${componentImp(component, context)}, document.getElementById('app'))
  `;
}


module.exports = ComponentInitializer