const routes = require("next-routes")();

module.exports = routes
  .add("/contractlist/new", "/contractlist/new")
  .add("/contractlist/:isCompany", "/contractlist/index");
