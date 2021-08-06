var json2xls = require('json2xls');
var fs = require('fs');
var json = fs.readFileSync('../ccsp/data/db.json');

/*
 var json = {
	foo: 'bar',
	qux: 'moo',
	poo: 123,
	stux: new Date()
}
*/
json = JSON.parse(json);
console.log(json.results);
var xls = json2xls(json.results);

fs.writeFileSync('data.xlsx', xls, 'binary');
