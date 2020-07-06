module.exports = (sequelize, dataTypes) => {
    const Tip = sequelize.define("Tip", {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },

            name: {
                type: dataTypes.STRING,
            },

            description: {
                type: dataTypes.STRING,
            },

            image: {
                type: dataTypes.STRING,
            },

            enabled: {
                type: dataTypes.INTEGER,
            },

        },

        {
            tableName: 'tips',
            timestamps: false,
        });


    return Tip;
}