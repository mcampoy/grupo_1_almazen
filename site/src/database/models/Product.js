module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define("Product", {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        id_category: {
            type: dataTypes.INTEGER,
            allowNull: false,
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
    }, {
        tableName: 'products',
        timestamps: false,
    });

    Product.associate = function(models) {
        Product.belongsToMany(models.Diet, {
            as: 'diets',
            through: 'product_diet',
            foreignKey: 'id_product',
            otherKey: 'id_diet',
            timestamps: false,
        });

        // Product.belongsToMany(models.Category, {
        //     as: 'categories',
        //     through: 'product_category',
        //     foreignKey: 'id_product',
        //     otherKey: 'id_category',
        //     timestamps: false,
        // });

        Product.belongsTo(models.Category, {
            as: 'categories',
            foreignKey: 'id_category',
            timestamps: false,
        });

        Product.belongsToMany(models.Recipe, {
            as: 'recipes',
            through: 'product_recipe',
            foreignKey: 'id_product',
            otherKey: 'id_recipe',
            timestamps: false,
        });

    };

    return Product;
}