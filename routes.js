const routes = require("next-routes")();

module.exports = routes
  .add("/contractlist/:entity/:isCompany", "/contractlist/index")
  .add("/contractlist/:entity/:isCompany/new", "/contractlist/new")
  .add("/contractlist/:entity/:isCompany/:address", "/contractlist/show");
