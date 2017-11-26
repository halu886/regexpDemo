//新手容易弄错的分组结构
var group = /(\d{4})-(\d{2}-(\d{2}))/;
"2010-12-22".match(group)
var group2 =/(\d){4}-(\d{2}-(\d{2}))/

"2012-12-22".match(group2)

//正则表达式替换
"1a2b3c".replace(/[a-z]/g," ")

//在替换中使用分组
"2010-12-22".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1")
"2010-12-22".replace(/(\d{4})-(\d{2})-(\d{2})/,"$1年$2月$1日")
// "2010-12-22".replace(/(\d{4})-(\d{2})-(\d{2})/,)

// 在替换中，用$1替代$0
"2012-12-22".replace(/(\d{4})-(\d{2})-(\d{2})/,"$&")

//反向引用
var str = "aa";
var reg = /^([a-z])\1&/g;
var reg1 = /^([a-z])\1$/
str.match(reg);//输出: ["AA", "99"]
// reg.test('aa')
reg1.test('bb')

//用反向应用匹配成对的tag
var pairedTagRegex = /<([^>]+)>[\s\S]*?<\/\1>/;
pairedTagRegex.test("<bold>text</bold>")
pairedTagRegex.test("<h1>title</h1>")
pairedTagRegex.test("<h1>text</bold>")

//用反向应用匹配更复杂成对的tag
pairedTagRegex = /^<([a-zA-Z0-9]+)(\s[^>]+)?>[\s\S]*?<\/\1>$/
pairedTagRegex.test("<bold>text</bold>")
pairedTagRegex.test("<h1>title</h1>")
pairedTagRegex.test("<span class=\"class1\">text</span>")
pairedTagRegex.test("<h1>text</bold>")

//匹配IP地址的正则表达式
var segment = /(0{0,2}[0-9]|0?[0-9]{2}|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/
// ipAddressRegex = /(/+segment+/\.){3}/+segment
ipAddressRegex = new RegExp("("+segment.source+"\.){3}"+segment.source)
ipAddressRegex.test('213.1.3.4')

//可能具有二义性的反向引用
"1231231235".replace(/^(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,"${1}0")

// 命名分组捕获
var namedRegex