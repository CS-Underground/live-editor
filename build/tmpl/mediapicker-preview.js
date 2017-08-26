this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["mediapicker-preview"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "mediapicker__sound";}

function program3(depth0,data) {
  
  
  return "mediapicker__image";}

function program5(depth0,data) {
  
  
  return "\r\n		<audio controls class=\"mediapicker-preview-file\"></audio>\r\n		<div class=\"thumb-error\"></div>\r\n		";}

function program7(depth0,data) {
  
  
  return "\r\n		<img src=\"/images/spinner.gif\" class=\"thumb-throbber\" />\r\n		<div class=\"thumb-shell\">\r\n			<img class=\"thumb\" />\r\n			<div class=\"thumb-error\"></div>\r\n		</div> \r\n		";}

function program9(depth0,data) {
  
  
  return "Pick file:";}

  buffer += "<div class=\"tooltip mediapicker-preview ";
  foundHelper = helpers.isAudio;
  stack1 = foundHelper || depth0.isAudio;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n	<div class=\"mediapicker-preview-content\">\r\n		\r\n		";
  foundHelper = helpers.isAudio;
  stack1 = foundHelper || depth0.isAudio;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(7, program7, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n		<button class=\"kui-button kui-button-submit kui-button-primary\" style=\"padding: 5px; width: 100%; margin: 0 auto;\" >\r\n			";
  foundHelper = helpers['_'];
  stack1 = foundHelper || depth0['_'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</button> \r\n	</div>\r\n	<div class=\"arrow\"></div>\r\n</div>";
  return buffer;});;