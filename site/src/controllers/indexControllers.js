const fs = require('fs');
const path = require('path');


const controller = {

	index: (req, res) => {
	
		const products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productsDataBase.json'), 'utf-8'));
		const recetas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/recetasDataBase.json'), 'utf-8'));
			
		res.render('index',{
			products,
			recetas
		});
	}
};

module.exports = controller;