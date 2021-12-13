const { withFrameworkConfig } = require("./framework/common/config")

module.exports = withFrameworkConfig({
  framework: {
    name: "shopify_local"
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', "es"],
    defaultLocale: "en-US"
  }
})
