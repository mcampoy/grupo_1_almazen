module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define("Product",

        {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },

            name: {
                type: dataTypes.STRING(45),
                allowNull: false,
            },
            code: {
                type: dataTypes.STRING(45),
                allowNull: false,
            },
            description: {
                type: dataTypes.STRING(800),
                allowNull: false,
            },
            description_short: {
                type: dataTypes.STRING(150),
                allowNull: false,
            },
            quantity: {
                type: dataTypes.INTEGER,
                allowNull: false,
            },
            unit: {
                type: dataTypes.STRING(10),
                allowNull: false,
            },
            price: {
                type: dataTypes.DECIMAL(10, 0),
                allowNull: false,
            },
            discount: {
                type: dataTypes.DECIMAL(10, 0),
                allowNull: false,
            },
            stock: {
                type: dataTypes.INTEGER(11),
                allowNull: false,
            },
            image: {
                type: dataTypes.STRING(45),
                allowNull: false,
            },
            enabled: {
                type: dataTypes.INTEGER(1),
                allowNull: false,
            }
        },

        {
            tableName: 'products', //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false, //Si no tengo timestamps
        });
    return Product; // Este retorno es lo que exporto
}