// const fs = require('fs');
// const path = require('path');

const componentVal = (val) => Object.prototype.toString.call(val) === "[object String]" ? `'${val}'` : val;

const componentImp = (component = '', props = {}) => `${Object.keys(Object.prototype.toString.call(props) === '[object Object]' ? props : {}).reduce((str, key) => {
  str += `${key}={${componentVal(props[key])}} `;
  return str;
}, `<${component} `)}/>`

function ComponentInitializer (component, props) {
  if (!component.length) return '';
  let componentPath = process.cwd() + `/packages/${component}/index.js`;
  return [
    'import React from "react";',
    `import Component from "${componentPath}";`,
    'import ReactDOM from "react-dom";',
    `ReactDOM.render(${componentImp(component, props)}, document.getElementById('app'))`
  ].join('\n');
}

function ComponentStoryMaker (options = {}) {
  this.options = options;
  // const componentPath = process.cwd() + `/packages/${process.env.component}/storyProps.js`;
  // const context = require(componentPath);
  // const importAll = requireContext => requireContext.keys().forEach(key => configuration[key] = requireContext(key));
  // importAll(require.context(componentPath, false, /.js$/));
  
  // console.log(typeof context, context);
  // const content = fs.readFileSync(componentPath, 'utf8');
  // const compRegex = new RegExp(`${process.env.component}.defaultProps`);
  // const getIndex = content.match(compRegex) || ['']
  // const props = content.substr(getIndex.index, content.length - 1)
  // console.log(props.replace(/ /g,'').split('\n').join(''))
}

ComponentStoryMaker.prototype.apply = function (compiler) {
  const componentPath = process.cwd() + `/packages/${process.env.component}/storyProps.js`;
  const context = require(componentPath);
  const storyFile = ComponentInitializer(process.env.component, context || {})
  console.log(context, storyFile);
  compiler.hooks.emit.tapAsync(
    'ComponentStoryMaker',
    (compilation, callback) => {
      
      // console.log('Here’s the `compilation` object which represents a single build of assets:', JSON.stringify(compilation.assets['main.js']));

      // Manipulate the build using the plugin API provided by webpack
      // compilation.addModule(/* ... */);

      callback();
    }
  );
}

module.exports = ComponentStoryMaker;

function FileListPlugin(options) {}

FileListPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    // Create a header string for the generated file:
    var filelist = 'In this build:\n\n';

    // Loop through all compiled assets,
    // adding a new line item for each filename.
    for (var filename in compilation.assets) {
      filelist += ('- '+ filename +'\n');
    }
    
    // Insert this list into the Webpack build as a new file asset:
    compilation.assets['filelist.md'] = {
      source: function() {
        return filelist;
      },
      size: function() {
        return filelist.length;
      }
    };

    callback();
  });
};