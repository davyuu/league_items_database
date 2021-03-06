var fs = require('fs');

var fileName = 'league_items_mobafire.json';

var json = JSON.parse(fs.readFileSync(fileName, 'utf8'));

json.sort(function(a, b) {
	a = a.item_name;
	b = b.item_name;

	return (a < b) ? -1 : (a > b) ? 1 : 0;
});

for (var i = 0; i < json.length; i++) {
	json[i].item_link_href = json[i]['item_image-src'];
	delete json[i]['item_link-href'];
}

console.log(json);
var jsonObj = JSON.stringify(json);
fs.writeFile(fileName, jsonObj, 'utf8');
