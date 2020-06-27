module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define("Usuario",

        {
            id_user: {
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

            avatar: {
                type: dataTypes.STRING,
                allowNull: false,
            }


        },

        {
            tableName: 'users', //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false, //Si no tengo timestamps

        });
    return Usuario; // Este retorno es lo que exporto
}