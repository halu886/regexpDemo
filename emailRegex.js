// //email正则表达式
// var   emailRegex = /^[-\w.]{0,64}@([-a-zA-Z0-9]{1,63}\.)*[-a-zA-Z0-9]{1,63}$/;
// emailRegex.test("abc@somehost");
// emailRegex.test("abc@somehost.com")
// emailRegex.test("abc@some-host.com")
// emailRegex.test("123@somehost")
// emailRegex.test("abc123@somehost.info")
// emailRegex.test("abc123@sub.somehost.com")
// emailRegex.test('abc@m-s.sub.somehost.com')
// emailRegex.test('abc@.somehost.com')
// emailRegex.test('a#bc@somehost-host.comnication')

// // 多选结构匹配身份证号码
// var idCardRegex = /^([1-9]\d{14}|[1-9]\d{14}\d{2}[0-9x])$/
// idCardRegex.test("1101018001017016")
// idCardRegex.test("11010119800101701x")
// idCardRegex.test("110101800101701x")

// // 匹配0-255之间的字符串
// var partRegexTest = /^([0-9]|[0-9]{2}|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/
// partRegexTest.test('0')
// partRegexTest.test('98')
// partRegexTest.test('168')
// partRegexTest.test('256')

// // 准确的HTMLtag匹配
// var tagRegex = /^<('[^']*'|"[^"]*"|[^'">])+>$/;
// tagRegex.test("<input name=txt value=\">\">")
// tagRegex.test("<input name=txt value='>'>")
// tagRegex.test("<a>")

var ab = /ab|cd/;
ab.test('ab')
ab.test('cd')

var ab = /^ab|cd$/;
ab.test('abc')
ab.test('bcd')

// var ab = 