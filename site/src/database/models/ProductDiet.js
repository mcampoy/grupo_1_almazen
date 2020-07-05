module.exports = (sequelize, dataTypes) => {
    const ProductDiet = sequelize.define("ProductDiet", {
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
        id_diet: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'product_diet',
        timestamps: false,
    });

    return ProductDiet;
}