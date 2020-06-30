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
            tableName: 'diets', //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false, //Si no tengo timestamps

        });

    
    Diet.associate = function (models) {
        Diet.belongsTo(models.Recipe, {
            as: 'recipes',
            foreignKey: 'id_recipe'
        });
    }

    return Diet; // Este retorno es lo que exporto
}