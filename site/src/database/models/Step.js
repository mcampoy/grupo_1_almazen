module.exports = (sequelize, dataTypes) => {
    const Step = sequelize.define("Step",

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

            description: {
                type: dataTypes.STRING,

            },

        },

        {
            tableName: 'steps', //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false, //Si no tengo timestamps

        });

    Step.associate = function (models) {
        Step.belongsTo(models.Recipe, {
            as: 'recipes',
            foreignKey: 'id_recipe'
        });
    }

    return Step; // Este retorno es lo que exporto
}