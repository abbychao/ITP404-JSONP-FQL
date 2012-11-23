var script = document.createElement('script');

var fql = "SELECT page_id, name, username, about, fan_count, pic_cover, pic_square, page_url ";
fql += "FROM page ";
fql += "WHERE username = 'coca-cola' OR username = 'pepsi' OR username = 'vitaminwater' OR username = 'jambajuice' "; 
fql += "ORDER BY fan_count";

script.src = "http://graph.facebook.com/fql?q=" + fql + "&callback=myFunction";
document.getElementsByTagName('head')[0].appendChild(script);


function myFunction(data) {
	console.log(data);

	var templateString = document.getElementById('fb-page-template').innerHTML
	var template = Handlebars.compile(templateString);
	var html = "<table><tr id='titles'><td>Logo</td><td>Name</td><td>Likes</td><td>About</td></tr>";

	var i = 0;
	while(i<4) {
		html += template(data.data[i]);
		i++;
	}

	html += "</table>";

	//var html = template(data.data[0]);
	console.log(html);

	document.getElementById('fb-page').innerHTML = html;
}