module.exports = (sequelize, dataTypes) => {
    const ProductRecipe = sequelize.define("ProductRecipe", {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_product: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        id_recipe: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'product_recipe',
        timestamps: false,
    });

    return ProductRecipe;
}