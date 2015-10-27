var assert = require("assert");
pagina = require(__dirname+"/../app.js");

describe('webempresa', function(){
    describe('webempresa', function(){
        it('Tiene que cargar correctamente app.js', function(){
            assert(pagina, "Funciona");
        });
    });
});
