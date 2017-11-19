// 用分组提取超链接的详细信息
var fs = require('fs');
fs.readFile('F:/VS code/projects/regexpDemo/baidu.html', "utf-8", function (err, data) {
    if (err) {
        console.error(err);
    } else {
        var hrefTagRegex = /<a[\s\S]+?href\s*=["']?([^"'\s]+)["']?[\s\S]+?>([^<]+)<\/a>/
        // hrefTagRegex
        var test = data.match(hrefTagRegex);
        console.log(test[0], test[1], test[2], test[3]);
    }
})