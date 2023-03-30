Handlebars.registerHelper("matematika", function(lvalue, operator, rvalue, options) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);
        
    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
    }[operator];
});

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow", true);

function fillList() {
	const data 		= JSON.parse(xhr.response);
	const source   	= document.getElementById("pokemon-list").innerHTML;
	const template 	= Handlebars.compile(source);
	const context 	= { pokemon: data.pokemon_species.slice(0, 25) };
	const html     	= template(context);
	
	document.getElementById('result').innerHTML = html;
}

xhr.onload = function() {
	fillList();
};

xhr.send();

