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
            tableName: 'categories', //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false, //Si no tengo timestamps

        });

    Category.associate = function(models) {
        Category.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_category',
            foreignKey: 'id_category',
            otherKey: 'id_product',
            timestamps: false,
        });
    }

    return Category; // Este retorno es lo que exporto
}