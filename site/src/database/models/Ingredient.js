module.exports = (sequelize, dataTypes) => {
    const Ingredient = sequelize.define("Ingredient",

        {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },

            id_recipe: {
                type: dataTypes.INTEGER,


            },

            order: {
                type: dataTypes.INTEGER,

            },

            quantity: {
                type: dataTypes.DECIMAL,

            },

            unit: {
                type: dataTypes.STRING,

            },

            name: {
                type: dataTypes.STRING,

            }
        },

        {
            tableName: 'ingredients', //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false, //Si no tengo timestamps

        });

    Ingredient.associate = function (models) {
        Ingredient.belongsTo(models.Recipe, {
            as: 'recipes',
            foreignKey: 'id_recipe'
        });
    }

    return Ingredient; // Este retorno es lo que exporto
}