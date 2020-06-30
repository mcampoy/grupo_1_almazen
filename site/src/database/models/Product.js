module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define("products",
​
        {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                primaryKey:true,
                autoIncrement: true
            },
​
            code: {
                type: dataTypes.STRING(45),
                allowNull: false,
​
            },
​
            description: {
                type: dataTypes.STRING(800),
                 allowNull: false,
            },
​
            description_short: {
                type: dataTypes.STRING(150),
                 allowNull: false,
            },
​
            quantity: {
                type: dataTypes.INTEGER,
                allowNull: false,
            },
​
            unit: {
                type: dataTypes.STRING(10),
                allowNull: false,
            },
​
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
​
​
        },
​
        {
            tableName: 'products', // nombre de la tabla
            timestamps: false, // timestamps
​
        });
    return Product; 
}