module.exports = (sequelize, dataTypes) => {
    const Diet = sequelize.define("Diet",

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
            tableName: 'diets',
            timestamps: false,

        });

    Diet.associate = function(models) {
        // Diet.belongsTo(models.Recipe, {
        //     as: 'recipes',
        //     foreignKey: 'id_recipe'
        // });

        Diet.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_diet',
            foreignKey: 'id_diet',
            otherKey: 'id_product',
            timestamps: false,
        });
    }

    return Diet;
}