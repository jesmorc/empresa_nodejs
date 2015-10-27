

/*
 * GET home page.
 */


var empresas = [
  { 
    name: 'Futurum', 
    comment: 'La empresa del futuro'
  },
  {
    name: 'Fidesol',
    comment: 'Situada en Granada'
  },
  {
    name: 'Novasoft',
    comment: 'Situada en Mengibar'
  }
];


var assert = require("assert");

exports.index = function(req, res){
  var names = empresas.map(function(p) { return p.name; });
  res.render('index', { empresas: names });
  if (names.length < 4){
	console.log("Hay menos de 4 empresas");
	assert(names, "Minimo 4 empresas");
  }
};


	
