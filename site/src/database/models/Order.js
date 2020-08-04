module.exports = (sequelize, dataTypes) => {
    const Order = sequelize.define("Order", {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        order_number: {
            type: dataTypes.INTEGER,
            allowNull: false,
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
        tableName: 'orders', //Si el nombre de la tabla no coincide con el del modelo
        timestamps: true, //Si no tengo timestamps
    });

    return Order; // Este retorno es lo que exporto
}