var DEMIEC = DEMIEC || {};


DEMIEC.Product = (function(entity)
{
	// private static member
	var attrs = {
					'images' : true,
					'name' : true,
					'cost' : true,
					'price' : true,
					'desc' : true,
					'tag' : false,
					'memo' : false,
					'links' : false,
				};

	var NewProduct = function(entity){
		// public members
		this.entity = {};
		this.is_valid = false;

		// constuctor
		for(key in attrs)
		{
			if(key in entity)
			{
				this.entity[key] = entity[key]; 
			}
		}
	};

	// 特権メソッド
	NewProduct.prototype.getAttrs = function () {
		return attrs;
	};

	return NewProduct;
}());


/* debug
var product = new DEMIEC.Product({
	'images' : "images1fdsalkjkl",
	'name' : "namedfsafsadf",
	'cost' : 4324,
	'price' : 5676,
	'desc' : "desc dfsdafsalkfj",
	'tag' : "tag fdsafsda",
	'memo' : "name fdsafsf",
	'links' : " list lfsdalkj lk",
});


console.log(product);
*/