module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define("User",

        {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                primaryKey:true,
                autoIncrement: true
            },

            name: {
                type: dataTypes.STRING,
                allowNull: false,

            },

            email: {
                type: dataTypes.STRING,
                 allowNull: false,
            },

            password: {
                type: dataTypes.STRING,
                 allowNull: false,
            },

            avatar: {
                type: dataTypes.STRING,
                allowNull: false,
            },

            role: {
                type: dataTypes.INTEGER,
                allowNull: false,
            },

            enabled: {
                type: dataTypes.INTEGER,
                allowNull: false,
            }
        },

        {
            tableName: 'users', //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false, //Si no tengo timestamps

        });
    return User; // Este retorno es lo que exporto
}