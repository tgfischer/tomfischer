const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")]
  },
  future: {
    webpack5: true
  }
};
