
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Puntuaciones de empresas de prácticas' });
};
