const fs = require('fs');
const path = require('path');

const productsdb = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productsDataBase.json'), 'utf-8'));
const recetas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/recetasDataBase.json'), 'utf-8'));

const controller = {

	index: (req, res) => {

		const receta = recetas.find((receta) => {
			return receta.id;
		})

		let products = [];
		for (let product of productsdb){
			if(product.habilitado == 1){
				products.push(product);
			}}

			res.render('index', {products, receta});
	}
};

module.exports = controller;