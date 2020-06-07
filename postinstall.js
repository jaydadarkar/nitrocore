const fs = require("fs");
let app_root = process.cwd();

let content_css = "// Your Custom Styles";
fs.appendFile('../../../storage/public/css/style.css', content_css, function (err) {
    if (err) console.log(err);
});

let content_js = "// Your Custom JS";
fs.appendFile('../../../storage/public/js/main.js', content_js, function (err) {
    if (err) console.log(err);
});

fs.copyFile(app_root + "/bin/bootstrap.min.js", '../../../storage/public/js/bootstrap.min.js', function (err){
	if(err) console.log(err);
});

fs.copyFile(app_root + "/bin/jquery.min.js", '../../../storage/public/js/jquery.min.js', function (err){
	if(err) console.log(err);
});

fs.copyFile(app_root + "/bin/popper.min.js", '../../../storage/public/js/popper.min.js', function (err){
	if(err) console.log(err);
});

fs.copyFile(app_root + "/bin/bootstrap.min.css", '../../../storage/public/css/bootstrap.min.css', function (err){
	if(err) console.log(err);
});