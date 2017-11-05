// var fs = require('fs');
// fs.readFile('C:\\Users\\Halu886\\Desktop\\百度一下，你就知道.html', "utf-8", function (err, data) {
//     if (err) {
//         console.error(err);
//     } else {
//         // console.log(data);
//         // console.log("open tags:\t" + data.match(/<[^\/][^>]*[^\/>]>/g) + "\n\n\n");
//         // console.log("close tags:\t" + data.match(/<\/[^\/]>/g) + "\n\n\n");
//         // console.log("self-closing tags:\t" + data.match(/<[^>\/]+\/>/g) + "\n\n\n")
//         // console.log(data.match(/<a\s[\s\S]+?<\/a>/).toString())
//         data.match(/<a\s[\s\S]+?<\/a>/g).forEach(function (value, index) {
//             console.log(value)
//         });
//     }
// })

var htmlSource = "<table>" +
    "<tr><td>1-1</td></tr>" +
    "<tr><td>2-1</td><td>2-2</td></tr>" +
    "</table>";

console.log(htmlSource.match(/<td[\s>][\s\S]+?<\/td>/g).toString());

// for (var table in tables) {
//     var tr = htmlSource.match(/<table[\s>]<\s\S>+?<\/table>/);
//     if (object.hasOwnProperty(table)) {
//         element = object[tabhtmlSource.match(/<table[\s>]<\s\S>+?<\/table>/le];

//         }
//     }