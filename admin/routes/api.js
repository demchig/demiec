
/*
 * ajax api
 */

var result = {
	'is_ok' : true,
	"msgs" : '',
	"data" : {}
};


var actions = {

	"product_list" : function(req, res){
		res.send(result);
	},

	"test" : function(){

	}
};


exports.main = function(req, res){
	var action = req.params.action || 'default';
	console.log(req.params);

	if(action in actions){

		actions[action](req, res);
	
	}else{
		res.send({
			'is_ok' : false,
			'msgs' : [
				'No action defined for :' + action
			]
		})
	}
};


