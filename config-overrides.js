// const { injectBabelPlugin } = require('react-app-rewired');

// module.exports = function override(config, env) {
    //   config = injectBabelPlugin(
        //       ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        //       config,
        //   );
        
        //   return config;
        // };
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
    
module.exports = function override(config, env) {
    config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
    config,
    );
    config.devtool = false; // 关掉 sourceMap
    config = injectBabelPlugin('babel-plugin-transform-decorators-legacy', config); // 支持装饰器
    config = rewireLess.withLoaderOptions({
    modifyVars: { '@primary-color': '#1890ff' },
    javascriptEnabled: true,
    })(config, env);
    return config;
};

// const { override, fixBabelImports } = require('customize-cra');

// module.exports = override(
//     fixBabelImports('import', {
//         libraryName: 'antd',
//         libraryDirectory: 'es',
//         style: 'css',
//      }),
// )


// const {
//     override,
//     disableEsLint,
//     overrideDevServer,
//     watchAll 
//   } = require("customize-cra");
   
//   module.exports = {
//     webpack: override(
//       // usual webpack plugin
//       disableEsLint()
//     ),
//     devServer: overrideDevServer(
//       // dev server plugin
//       watchAll()
//     )
//   };