require("./styles/main.scss");

// Flag variables are injects via Webpack DefinePlugin
var flags = {
  regexEndpoint: regexEndpoint,
};

var Elm = require("./Main.elm");
Elm.Main.embed(document.getElementById("main"), flags);
