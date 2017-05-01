(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['main'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a> \n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n			<p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<img src=\"img/"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.banner : depth0)) != null ? stack1.image : stack1)) != null ? stack1.mobile : stack1), depth0))
    + "\" alt=\"iPhone\" /> \n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<img src=\"img/"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.banner : depth0)) != null ? stack1.image : stack1)) != null ? stack1.desktop : stack1), depth0))
    + "\" alt=\"iPhone\" /> \n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "				<h3>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n				<p>"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "				<p>"
    + ((stack1 = ((helper = (helper = helpers.descriptionExtra || (depth0 != null ? depth0.descriptionExtra : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"descriptionExtra","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<div class=\"tiles__tile\" style=\"background-color:"
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\">\n				<div class=\"tile__title\">\n					<h4>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n				</div>\n				<div class=\"tile__description\">\n					<p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n				</div>\n				<div class=\"tile__link\">\n					<a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper)))
    + "</a>\n				</div>\n			</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", buffer = 
  "<header>\n	<div class=\"topbar\">\n		<div id=\"logo\" role=\"logo\" class=\"topbar__title\">\n			<h1>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n		</div>\n		<div class=\"topbar__menu\">\n			<div class=\"search\" role=\"search\"></div>\n			<nav>\n				<div class=\"navbar navbar--close\">\n"
    + ((stack1 = container.invokePartial(partials["navigation-icon"],depth0,{"name":"navigation-icon","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "				</div>\n				<div class=\"navbar navbar--open\">\n"
    + ((stack1 = (helpers.list || (depth0 && depth0.list) || alias2).call(alias1,(depth0 != null ? depth0.nav : depth0),{"name":"list","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</nav>\n		</div>\n	</div>\n	<div class=\"banner\">\n		<div class=\"banner__title\" id=\"bannerTitle\">\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.banner : depth0),{"name":"with","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n		<div class=\"banner__image\">\n";
  stack1 = ((helper = (helper = helpers.ifMobile || (depth0 != null ? depth0.ifMobile : depth0)) != null ? helper : alias2),(options={"name":"ifMobile","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.ifMobile) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n	</div>\n</header>\n\n<main>\n	<section class=\"container\">\n		<div class=\"row\">\n			<div class=\"col-md-6\">\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.content : depth0),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n			<div class=\"col-md-6 desk--margint150\">\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.content : depth0),{"name":"with","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</div>\n	</section>\n	<section class=\"container\">\n		<div class=\"tiles\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tiles : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</section>\n</main>\n";
},"usePartial":true,"useData":true});
})();