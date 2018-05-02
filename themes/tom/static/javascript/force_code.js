// add "prettyprint" to all the <pre> tags
var sections = document.getElementsByTagName('pre');
for(var i = 0; i < sections.length; ++i) {
  sections[i].className = 'prettyprint';
}

// run pretty print magic
prettyPrint();
