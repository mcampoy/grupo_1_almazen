module.exports = (sequelize, dataTypes) => {
    const Recipe = sequelize.define("Recipe",

        {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },

            diet: {
                type: dataTypes.STRING,
            },

            name: {
                type: dataTypes.STRING,
                // allowNull: false,

            },

            description: {
                type: dataTypes.STRING,
                //  allowNull: false,
            },

            difficulty: {
                type: dataTypes.STRING,
                //  allowNull: false,
            },

            preparation_time: {
                type: dataTypes.STRING,
                // allowNull: false,
            },

            serving: {
                type: dataTypes.INTEGER,
                // allowNull: false,
            },

            image: {
                type: dataTypes.STRING,
                // allowNull: false,
            },

            enabled: {
                type: dataTypes.INTEGER,
                // allowNull: false,
            }
        },

        {
            tableName: 'recipes', //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false, //Si no tengo timestamps

        });

    Recipe.associate = function(models) {
        Recipe.hasMany(models.Ingredient, {
            as: 'ingredients',
            foreignKey: 'id_recipe'
        });

        Recipe.hasMany(models.Step, {
            as: 'steps',
            foreignKey: 'id_recipe'
        });

        Recipe.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_recipe',
            foreignKey: 'id_recipe',
            otherKey: 'id_product',
            timestamps: false,
        });
    }

    return Recipe; // Este retorno es lo que exporto
}