module.exports = (sequelize, dataTypes) => {
    const Cart = sequelize.define("Cart", {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: dataTypes.STRING(80),
            allowNull: false,
        },
        id_product: {
            type: dataTypes.STRING(4),
            allowNull: false,
        },
        quantity: {
            type: dataTypes.INTEGER(10),
            allowNull: false,
        },
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at: {
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
