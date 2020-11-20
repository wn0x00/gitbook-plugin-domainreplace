module.exports = {
  hooks: {
    "page:before": function (page) {

      var pattern = this.config.options.pluginsConfig.domainreplace.pattern;
      var flags = this.config.options.pluginsConfig.domainreplace.flags;
      var substitute = this.config.options.pluginsConfig.domainreplace.substitute;

      var content = page.content;
      var regex_pattern = new RegExp(pattern, flags);

      content = content.replace(regex_pattern, substitute);

      page.content = content;
      return page;
    }
  }
};
