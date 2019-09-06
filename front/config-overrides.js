const {
    override,
    fixBabelImports,
    addLessLoader,
} = require("customize-cra");
const rewireLess = require('react-app-rewire-less');


module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd", style: true // change importing css to less
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            "@layout-body-background": "#FFFFFF",
            "@layout-header-background": "#FFFFFF",
            "@layout-footer-background": "#FFFFFF"
        }
    })
);