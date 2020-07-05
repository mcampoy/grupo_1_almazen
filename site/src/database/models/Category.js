module.exports = (sequelize, dataTypes) => {
    const Category = sequelize.define("Category",

        {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },

            name: {
                type: dataTypes.STRING,
            },

            enabled: {
                type: dataTypes.INTEGER,
            },

        },

        {
            tableName: 'categories',
            timestamps: false,
        });

        // Dejo comentada la propuesta del Rafa pero no me sirvió para mostrar los ingredientes por categoría

    // Category.associate = function(models) {
    //     Category.belongsToMany(models.Product, {
    //         as: 'products',
    //         through: 'product_category',
    //         foreignKey: 'id_category',
    //         otherKey: 'id_product',
    //         timestamps: false,
    //     });

    // Propuesta de Matías para poder mostrar los productos por categoría (Hay que revisar)
    Category.associate = function(models) {
           Category.hasMany(models.Product, {
                as: 'products',
                foreignKey: 'id_category',
                timestamps: false,
            });
    }

    return Category;
}