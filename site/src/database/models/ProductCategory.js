module.exports = (sequelize, dataTypes) => {
    const ProductCategory = sequelize.define("ProductCategory", {
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
        id_category: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'product_category',
        timestamps: false,
    });

    return ProductCategory;
}