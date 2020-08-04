module.exports = (sequelize, dataTypes) => {
    const Cart = sequelize.define("Cart", {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        id_product: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: dataTypes.DECIMAL,
            allowNull: false,
        },
        discount: {
            type: dataTypes.DECIMAL,
            allowNull: false,
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        tableName: 'cart', //Si el nombre de la tabla no coincide con el del modelo
        timestamps: true, //Si no tengo timestamps
    });

    return Cart; // Este retorno es lo que exporto
}